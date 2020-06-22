import { MappingLoader, APIPlatform, APIMapping } from './MappingLoader';
import { PlatformDetector, PlatformDetectorRule, FencedBlockInfo } from './PlatformDetector';

let tovfile = require('to-vfile')
let remark = require(`remark`);
let parse = require('remark-parse');
let stringify = require('remark-stringify');
let frontmatter = require('remark-frontmatter');
const visit = require('unist-util-visit');
let jsyaml = require('js-yaml');

function getApiLink(apiRoot: string, typeName: string, memberName: string | null, options: any): any {
    let mappings: MappingLoader = options.mappings;
    let resolvedTypeName: string | null = typeName;
    let isClass = false;
    let isInterface = false;
    let isEnum = false;
    if (!(typeName.indexOf(options.platformPascalPrefix) == 0)) {
        resolvedTypeName = mappings.getPlatformTypeName(typeName, <APIPlatform>options.platform);
        if (resolvedTypeName) {
            let typeInfo = mappings.getType(typeName);
            if (typeInfo) {
                if (typeInfo.isEnum) {
                    isEnum = true;
                } else {
                    //todo: interfaces.
                    isClass = true;
                }
            }
        }
    } else {
        isClass = true;
    }
    let linkText: string | null = null;
    if (resolvedTypeName) {
        if (isClass) {
            linkText = apiRoot + "classes/" + resolvedTypeName.toLowerCase() + ".html";
        } else if (isEnum) {
            linkText = apiRoot + "enums/" + resolvedTypeName.toLowerCase() + ".html";
        } else if (isInterface) {
            linkText = apiRoot + "interfaces/" + resolvedTypeName.toLowerCase() + ".html";
        }
    }
    if (linkText && memberName) {
        linkText = linkText + "#" + memberName.toLowerCase();
    }

    if (linkText) {
        return {
            type: "link",
            url: linkText,
            value: "",
            children: [{
                type: "inlineCode",
                value: memberName ? memberName : resolvedTypeName
            }]
        };
    } else {
        return null;
    }
}

function transformCodeRefs(options: any) {
    function transformRef(node: any, index: number, parent: any) {
        let memberName = node.value;
        let docs = options.docs;
        let apiDocRoot: string = docs.apiDocRoot;
        let createLink: boolean = <boolean><any>apiDocRoot;
        let apiTypeName: string | null = null;
        let isTypeName: boolean = false;

        if (memberName.indexOf("Ig$") >= 0) {
            memberName = memberName.replace("Ig$", options.platformPascalPrefix);
            apiTypeName = memberName;
            let link = getApiLink(apiDocRoot, apiTypeName!, null, options);
            if (link) {
                parent.children.splice(index, 1, link);
                return;
            }
            node.value = memberName;
            return;
        }
        if (memberName.indexOf("ig$-") >= 0) {
            memberName = memberName.replace("ig$-", options.platformSpinalPrefix);

            node.value = memberName;
            return;
        }

        if (memberName.indexOf(".") >= 0) {
            let parts = memberName.split(".");
            options.typeName = parts[0];
            apiTypeName = options.typeName;
            parts.splice(0, 1);
            memberName = parts.join(".");
        }

        let mappings: MappingLoader = options.mappings;

        let resolvedName = mappings.getPlatformMemberName(
            <string>options.typeName,
            <APIPlatform>options.platform,
            <string>memberName);
        apiTypeName = options.typeName;

        if (resolvedName == null && options.mentionedTypes &&
            options.mentionedTypes.length > 0) {
            for (var i = 0; i < options.mentionedTypes.length; i++) {
                let type = options.mentionedTypes[i];
                resolvedName = mappings.getPlatformMemberName(
                    <string>type,
                    <APIPlatform>options.platform,
                    <string>memberName);
                if (resolvedName != null) {
                    apiTypeName = type;
                    break;
                }
            }
        }

        if (resolvedName == null) {
            resolvedName = mappings.getPlatformTypeName(
                <string>memberName,
                <APIPlatform>options.platform);

            if (resolvedName != null) {
                isTypeName = true;
                apiTypeName = memberName;
                options.typeName = memberName;
            }
        }

        if (resolvedName == null) {
            //console.log("couldn't find name");
            //console.log(options);
            return;
        }

        if (createLink) {
            if (isTypeName) {
                let link = getApiLink(apiDocRoot, apiTypeName!, null, options);
                if (link) {
                    parent.children.splice(index, 1, link);
                    return;
                }
            } else {
                let link = getApiLink(apiDocRoot, apiTypeName!, resolvedName, options);
                if (link) {
                    parent.children.splice(index, 1, link);
                    return;
                }
            }

        }
        node.value = resolvedName;
    }

    return function (tree: any) {
        visit(tree, 'inlineCode', transformRef)
    }
}

function getFrontMatterTypes(options: any) {
    function getTypes(node: any) {
        let ym = jsyaml.load(node.value);
        if (ym.mentionedTypes) {
            let mt = ym.mentionedTypes;
            let arr: string[] = [];
            if (typeof mt == "string") {
                let parts = mt.split(",");
                for (var i = 0; i < parts.length; i++) {
                    arr.push(parts[i].trim());
                }
            } else {
                arr = mt;
            }
            options.mentionedTypes = arr;
            let mappings = <MappingLoader>options.mappings;
            for (let i = 0; i < options.mentionedTypes.length; i++) {
                let currType = options.mentionedTypes[i];
                let currTypeInfo = mappings.getType(currType);
                if (currTypeInfo) {
                    if (currTypeInfo.originalBaseTypeName) {
                        let fullName = currTypeInfo.originalBaseTypeNamespace + "." +
                        currTypeInfo.originalBaseTypeName;

                        if (currTypeInfo.originalBaseTypeName == "Object" ||
                        currTypeInfo.originalBaseTypeName == "Control" ||
                        currTypeInfo.originalBaseTypeName == "DependencyObject" ||
                        currTypeInfo.originalBaseTypeName == "EventArgs") {
                            continue;
                        }

                        if (options.mentionedTypes.indexOf(currTypeInfo.originalBaseTypeName) < 0 &&
                        options.mentionedTypes.indexOf(fullName) < 0) {
                            options.mentionedTypes.splice(i + 1, 0, fullName);
                        }
                    }
                }
            }
        }
        if (ym.namespace) {
            options.namespace = ym.namespace;
            if (options.mappings) {
                options.mappings.namespace = options.namespace;
            }
        }
    }

    return function (tree: any) {
        visit(tree, 'yaml', getTypes)
    }
}

function transformDocLinks(options: any) {
    function transformLink(node: any) {
        let reference = node.url;
        let mappings: MappingLoader = options.mappings;
        if (reference.indexOf("doc://") !== 0) {
            return;
        }

        reference = reference.replace("doc://", "");
        let referenceParts = reference.split("/");
        let controlName = referenceParts[0];
        if (options.docs.transformControlNames) {
            let resolvedName = mappings.getPlatformMemberName(
                <string>options.typeName,
                <APIPlatform>options.platform,
                <string>controlName);
            if (resolvedName) {
                controlName = resolvedName;
            }
        }

        let docUrl = "";
        if (referenceParts.length > 1) {
            docUrl = options.docs[referenceParts[1]]
        } else {
            docUrl = options.docs["Main"];
        }
        if (!docUrl) {
            if (referenceParts.length > 1) {
                throw new Error("docUrl pattern was missing for: " + referenceParts[1]);
            } else {
                throw new Error("docUrl pattern was missing for: Main");
            }
        } else {
            docUrl = docUrl.replace("{CONTROL_NAME}", controlName);
        }

        node.url = docUrl;
    }

    return function (tree: any) {
        visit(tree, 'link', transformLink)
    }
}

function transformDocPlaceholders(options: any) {
    function transformText(node: any) {
        if (!node.value) {
            return;
        }
        let value = node.value;

        let docs = options.docs;
        if (docs.replacements) {
            for (let i = 0; i < docs.replacements.length; i++) {
                let curr = docs.replacements[i];
                let name = curr.name;
                let r = new RegExp(name, "g");
                value = value.replace(r, curr.value);
            }

            node.value = value;
        }
    }

    return function (tree: any) {
        visit(tree, null, transformText)
    }
}

function transformNotes(options: any) {
    function gatherText(node: any) {
        options.gatheredText.push({ text: node.value, node: node });
    }

    function transformNote(node: any, index: number, parent: any) {
        if (node.children.length < 1) {
            return;
        }

        if (node.children[0].type != "paragraph") {
            return;
        }

        if (node.children[0].children[0].type != "linkReference")
        {
            return;
        }

        let noteType = node.children[0].children[0].identifier;

        let platChecks: any[];
        options.gatheredText.length = 0;
        visit(node, "text", gatherText);
        platChecks = options.gatheredText;

        let notePlats: APIPlatform[] = [];
        let platMatch: any[] = [];
        let matchMatch: RegExp[] = [];

        for (let i = 0; i < platChecks.length; i++) {
            let platCheck = platChecks[i].text;
            let platNode = platChecks[i].node;

            platCheck = platCheck.trim().toLowerCase();
            for (let key in Object.keys(APIPlatform)) {

                let keyStr = APIPlatform[key];
                if (!keyStr) {
                    continue;
                }
                let r = new RegExp("^\\r*\\n*\\s*(for)*(in)*(with)* " + keyStr.toLowerCase() + ":*\\s*\\r*\\n*", "im")
                if ((platCheck as string).match(r))
                {
                    notePlats.push(<APIPlatform>+key);
                    platMatch.push(platNode);
                    matchMatch.push(r);
                }
            }
        }

        if (notePlats.indexOf(options.platform) >= 0) {
            node.children[0].children.splice(0, 1);
            let r = matchMatch[notePlats.indexOf(options.platform)];
            let j = 1;
            for (let i = 0; i < node.children[0].children.length; i++) {
                if (node.children[0].children[i].value) {
                    node.children[0].children[i].value =
                    node.children[0].children[i].value.replace(r, "");

                    if (node.children[0].children[i].value.length == 0) {
                        options.toDelete.add(node.children[0].children[i]);

                        if (node.children[0].children.length == 1) {
                            options.toDelete.add(node.children[0]);
                        }
                    }
                }
                //if (platMatch.indexOf(node.children[0].children[i]) == -1) {
                    // parent.children.splice(index + j,0,node.children[0].children[i]);
                    // j++
                //}
            }
            for (let i = 0; i < node.children.length; i++) {
                if (node.children[i].value) {
                    node.children[i].value =
                    node.children[i].value.replace(r, "");

                    if (node.children[i].value.length == 0) {
                        options.toDelete.add(node.children[i]);
                    }
                }

                //if (platMatch.indexOf(node.children[i]) == -1) {
                    parent.children.splice(index + j,0,node.children[i]);
                    j++;
                //}
            }
            parent.children.splice(index, 1);
            return index;
        } else {
            if (notePlats.length > 0) {
                options.toDelete.add(node);
            }
        }
    }

    return function (tree: any) {
        visit(tree, 'blockquote', transformNote)
    }
}

class PlatformSegment {
    isBegin: boolean;
    platforms: APIPlatform[];
    startIndex: number;
    endIndex: number;

    constructor(isBegin: boolean, platforms: APIPlatform[], startIndex: number, endIndex: number) {
        this.isBegin = isBegin;
        this.platforms = platforms;
        this.startIndex = startIndex;
        this.endIndex = endIndex;
    }
}

function getPlatformSegemnts(node: any): PlatformSegment[] {
    let reg = /(<!--[^>]*-->)/gm;
    let match: RegExpExecArray | null;
    let ret: PlatformSegment[] = [];
    while (match = reg.exec(node.value)) {
        let val = match[0];
        let isBegin = val.indexOf("end:") == -1;
        let plats = getPlatformsFromString(val);
        if (plats && plats.length > 0) {
            //let platforms: APIPlatform[] = [];
            let seg = new PlatformSegment(isBegin, plats, match.index, match.index + val.length);
            ret.push(seg);
        }
    }

    return ret;
}

function isPlatformComment(node: any): boolean {
    if (node.type == "html" &&
        node.value.trim().indexOf("<!--") >= 0) {

        let platformSegments = getPlatformSegemnts(node);
        if (platformSegments && platformSegments.length > 0) {
            return true;
        }
    }
    return false;
}

function getPlatformsFromString(str: string): APIPlatform[] {
    let val = str.replace("<!--", "");
    val = val.replace("-->", "");
    val = val.replace("end:", "");
    val = val.trim().toLowerCase();

    let vals = val.split(',');
    for (let i = 0; i < vals.length; i++) {
        vals[i] = vals[i].trim();
    }

    let plats: APIPlatform[] = [];

    for (let val of vals) {
        for (let key in Object.keys(APIPlatform)) {
            let keyStr = APIPlatform[key];
            if (!keyStr) {
                continue;
            }
            if (keyStr.toLowerCase() == val) {
                plats.push(<APIPlatform>+key);
            }
        }
    }
    return plats;
}

function getPlatformsFromComment(node: any) : APIPlatform[] {
    return getPlatformsFromString(node.value);
}

function finishRemove(options: any) {
    function removeNodes(node: any, index: number, parent: any) {
        if (options.toDelete.has(node)) {
            parent.children.splice(index, 1);

            return index;
        }
    }

    return function (tree: any) {
        visit(tree, removeNodes);

        options.toDelete.clear();
    }
}

function finishRemoveBlocks(options: any) {
    function removeNodes(node: any, index: number, parent: any) {
        if (options.toDelete.has(node)) {
            parent.children.splice(index, 1);

            return index;
        }
    }

    return function (tree: any) {
        visit(tree, removeNodes);

        options.toDelete.clear();
    }
}

function finishRemoveNotes(options: any) {
    function removeNodes(node: any, index: number, parent: any) {
        if (options.toDelete.has(node)) {
            parent.children.splice(index, 1);

            return index;
        }
    }

    return function (tree: any) {
        visit(tree, removeNodes);

        options.toDelete.clear();
    }
}

function platformsEqual(plats: APIPlatform[], otherPlats: APIPlatform[]): boolean {
    if (plats.length != otherPlats.length) {
        return false;
    }
    for (let i = 0; i < plats.length; i++) {
        if (plats[i] !== otherPlats[i]) {
            return false;
        }
    }

    return true;
}

function omitPlatformSpecificSections(options: any) {
    function omitSections(node: any, index: number, parent: any) {

        if (node.value.indexOf("end:") >= 0) {
            let segments = getPlatformSegemnts(node);
            for (let segment of segments) {
                let checkIndex = index;
                while (checkIndex >= 0) {

                    if (parent.children[checkIndex] &&
                    parent.children[checkIndex].type == "html" &&
                    isPlatformComment(parent.children[checkIndex]) &&
                    parent.children[checkIndex].value.indexOf("end:") == -1) {
                        let startSegs = getPlatformSegemnts(parent.children[checkIndex]);
                        for (let i = segments.length - 1; i >= 0; i--) {
                            //let currPlats = getPlatformsFromComment(parent.children[checkIndex]);
                            let startSeg = startSegs[i];
                            let currPlats = startSeg.platforms;

                            if (platformsEqual(currPlats, segment.platforms) &&
                            segment.platforms.indexOf(options.platform) == -1) {
                                for (let ind = checkIndex + 1; ind < index; ind++) {
                                    options.toDelete.add(parent.children[ind]);
                                }
                                parent.children[checkIndex].value = parent.children[checkIndex].value.substring(0, startSeg.startIndex);
                                if (parent.children[checkIndex].value.length == 0) {
                                    options.toDelete.add(parent.children[checkIndex])
                                }
                                parent.children[index].value = parent.children[index].value.substring(segment.endIndex);
                                if (parent.children[index].value.length == 0) {
                                    options.toDelete.add(parent.children[index]);
                                }
                                break;
                            }
                        }
                    }


                    checkIndex--;
                }
            }
        }
        //console.log(node);
    }



    return function (tree: any) {
        visit(tree, 'html', omitSections)
    }
}

function omitStackblitzButtons(options: any) {
    function omitButtons(node: any, index: number, parent: any) {
        let docs = options.docs;
        if (node.value.indexOf("class=\"stackblitz-btn\"" ||
        node.value.indexOf("class='stackblitz-btn'") >= 0)) {
            if (!docs.showStackblitzButtons) {
                node.value = node.value.replace(/<\s*button[^>]+class=['"]stackblitz-btn['"][^>]*>[\s\S]*?<\/\s*button\s*>/, "");
            }
        }
        //console.log(node);
    }

    return function (tree: any) {
        visit(tree, 'html', omitButtons)
    }
}

function omitFencedCode(options: any) {
    function omitFence(node: any, index: number, parent: any) {
        if (!node.lang) {
            return;
        }
        let lang = node.lang;

        let platformDetector: PlatformDetector = options.platformDetector;

        let info = new FencedBlockInfo();
        info.code = node.value;
        info.lang = lang;

        let plats = platformDetector.detectPlatform(info);

        if (index - 1 >= 0 && parent.children[index - 1] &&
        parent.children[index - 1].type == "html" &&
        parent.children[index - 1].value.indexOf("<!--") >= 0 ) {
            if (isPlatformComment(parent.children[index - 1])) {
                if (getPlatformsFromComment(parent.children[index - 1]) != null) {
                    plats = getPlatformsFromComment(parent.children[index - 1])!;
                }
            }

            if (options.transformer.shouldOmitFencedCode(lang, plats)) {
               options.toDelete.add(parent.children[index - 1]);
               options.toDelete.add(node);
            }
        }

        if (index - 2 >= 0 && parent.children[index - 1] &&
            parent.children[index - 1].type == "paragraph" &&
            parent.children[index - 2] &&
            parent.children[index - 2].type == "html" &&
            parent.children[index - 2].value.indexOf("<!--") >= 0) {
                if (isPlatformComment(parent.children[index - 2])) {
                    if (getPlatformsFromComment(parent.children[index - 2]) != null) {
                        plats = getPlatformsFromComment(parent.children[index - 2])!;
                    }
                }

                if (options.transformer.shouldOmitFencedCode(lang, plats)) {
                   options.toDelete.add(parent.children[index - 2]);
                   options.toDelete.add(parent.children[index - 1]);
                   options.toDelete.add(node);
                }
            }

        if (options.transformer.shouldOmitFencedCode(lang, plats)) {
            options.toDelete.add(node);

            //return index;
        }

        //highlight.js, used by docfx, doesn't currently support tsx highlighting.
        if (lang.toLowerCase() == "tsx") {
            lang = "ts";
        }
        node.lang = lang;
        //console.log(node);
    }

    return function (tree: any) {
        visit(tree, 'code', omitFence)
    }
}



export class MarkdownTransformer {
    private _platformDetector: PlatformDetector | undefined;
    private _mappings: MappingLoader | undefined;
    private _platform: APIPlatform | undefined;

    shouldOmitFencedCode(language: string, platform: APIPlatform[]) {

        switch (this._platform) {
            case APIPlatform.Angular:
                if (!PlatformDetectorRule.isTS(language) &&
                language != "js" &&
                !PlatformDetectorRule.isHTML(language)) {
                    return true;
                }

                if (platform.indexOf(APIPlatform.Angular) == -1) {
                    return true;
                }
                break;
            case APIPlatform.React:
                if (!PlatformDetectorRule.isTS(language) &&
                !PlatformDetectorRule.isTSX(language) &&
                 language != "js" &&
                 !PlatformDetectorRule.isHTML(language)) {
                    return true;
                }

                if (platform.indexOf(APIPlatform.React) == -1) {
                    return true;
                }
            break;
            case APIPlatform.WebComponents:
                if (!PlatformDetectorRule.isTS(language) &&
                language != "js" &&
                !PlatformDetectorRule.isHTML(language)) {
                    return true;
                }

                if (platform.indexOf(APIPlatform.WebComponents) == -1) {
                    return true;
                }
            break;
            case APIPlatform.Slingshot:
                if (!PlatformDetectorRule.isTS(language) &&
                language != "js" &&
                !PlatformDetectorRule.isHTML(language)) {
                    return true;
                }

                if (platform.indexOf(APIPlatform.Slingshot) == -1) {
                    return true;
                }
            break;
        }


        return false;
    }

    private _docs: any;

    configure(mappings: MappingLoader, platform: APIPlatform, docs: any) {
        this._mappings = mappings;
        this._platform = platform;
        this._platformDetector = new PlatformDetector();
        this._docs = docs;
    }

    transformContent(
        typeName: string,
        fileContent: string,
        callback: (err: any, results: string | null) => void): void {

        let deleteMap: Set<any> = new Set<any>();



        let options = {
            typeName: typeName,
            platform: this._platform,
            mappings: this._mappings,
            gatheredText: [],
            transformer: this,
            toDelete: deleteMap,
            platformDetector: this._platformDetector,
            docs: this._docs,
            platformPascalPrefix: null as string | null,
            platformSpinalPrefix: null as string | null
        };

        switch (this._platform) {
            case APIPlatform.Angular:
                options.platformPascalPrefix = "Igx";
                options.platformSpinalPrefix = "igx-";
                break;
            case APIPlatform.React:
                options.platformPascalPrefix = "Igr";
                options.platformSpinalPrefix = "igr-";
                break;
            case APIPlatform.WebComponents:
                options.platformPascalPrefix = "Igc";
                options.platformSpinalPrefix = "igc-";
                break;
            case APIPlatform.Slingshot:
                options.platformPascalPrefix = "Igs";
                options.platformSpinalPrefix = "igs-";
                break;
        }

        remark().data('settings', {
            commonmark: false,
            footnotes: true,
            pedantic: true,
        })
        .use(parse)
        .use(frontmatter, ['yaml', 'toml'])
        .use(getFrontMatterTypes, options)
        .use(transformCodeRefs, options)
        .use(transformDocLinks, options)
        .use(transformDocPlaceholders, options)
        .use(omitPlatformSpecificSections, options)
        .use(omitStackblitzButtons, options)
        .use(finishRemove, options)
        .use(omitFencedCode, options)
        .use(finishRemoveBlocks, options)
        .use(transformNotes, options)
        .use(finishRemoveNotes, options)
        .use(stringify)
        .process(fileContent, function(err: any, vfile: any) {
            if (err) {
                callback(err, null);
                return;
            }

            callback(null, vfile.toString());
        });
    }
}