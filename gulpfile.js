const { series, watch, src, dest, parallel} = require('gulp');
const { buildDocfx } = require('igniteui-docfx-template');
const slash = require('slash');
const replace = require('gulp-replace');
const insert = require('gulp-insert');
const path = require('path');
const browserSync = require('browser-sync').create();
const argv = require('yargs').argv;

const LANG = argv.lang === undefined ? "en" : argv.lang;
const DOCFX_BASE = {
    en: 'en',
    jp: 'jp'
};
const DOCFX_PATH = `docfx/${DOCFX_BASE[LANG]}`;
const DOCFX_TEMPLATE_GLOBAL = slash(path.join(__dirname, 'node_modules', 'igniteui-docfx-template', 'template', 'bundling.global.json'));
const DOCFX_SITE = `${DOCFX_PATH}/_site`;

const removeHTMLExtensionFromSiteMap = () => {
    return src([DOCFX_SITE + '/sitemap.xml'])
        .pipe(replace(/\.html/g, ''))
        .pipe(dest(DOCFX_SITE));
};

const addNoIndexTag = (done) => {
    const environment = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'development';
    if (environment !== 'production') {
        return src(`${DOCFX_SITE}/**/*.html`)
        .pipe(insert.transform(function (contents, file) {
            const headTagRegex = /<head[\s\S]*?>/i;
            const match = contents.match(headTagRegex);
    
            if (match) {
              const metaTag = '<meta name="robots" content="noindex, nofollow" />';
              const modifiedContents = contents.replace(match[0], match[0] + metaTag);
              return modifiedContents;
            }
    
            return contents;
        }))
        .pipe(dest(DOCFX_SITE));
    }
    done();
};

const replaceEnvironmentVariables = () => {
    const environment = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'development';
    const config = require(`./docfx/${LANG}/environment.json`);
    return src(`${DOCFX_SITE}/**/*.html`)
        .pipe(replace(/(\{|\%7B)environment:([a-zA-Z]+)(\}|\%7D)/g, function (match, brace1, environmentVarable, brace2) {
            const value = config[environment][environmentVarable];
            return value || match;
        }))
        .pipe(dest(DOCFX_SITE));
}

const buildSite = () => {
    return buildDocfx({
        siteDir: DOCFX_SITE,
        projectDir: DOCFX_PATH,
        environment: process.env.NODE_ENV ? process.env.NODE_ENV.trim() : null
    });
}

const serveSite = (done) => {
    browserSync.init({
        server: {
            baseDir: `${DOCFX_SITE}`
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: '0',
                margin: '0px',
                padding: '5px',
                position: 'fixed',
                fontSize: '10px',
                zIndex: '9999',
                borderRadius: '5px 0px 0px',
                color: 'white',
                textAlign: 'center',
                display: 'block',
                backgroundColor: 'rgba(60, 197, 31, 0.498039)'
            }
        }
    });
    done();
};

const browserSyncReload = (done) => {
    browserSync.reload();
    done();
};

const addWatcher = (done) => {

    watch([
        `${DOCFX_TEMPLATE_GLOBAL}`,
        `./${DOCFX_PATH}/**/*.md`],
        series(buildSite, browserSyncReload));
    done();
}

exports['ci-build'] = series(buildSite, addNoIndexTag, removeHTMLExtensionFromSiteMap, replaceEnvironmentVariables);
exports.build = series(buildSite, addNoIndexTag, removeHTMLExtensionFromSiteMap, replaceEnvironmentVariables);
exports.serve = series(this.build, serveSite, addWatcher);