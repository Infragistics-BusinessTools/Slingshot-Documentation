const { series, watch } = require('gulp');
const { spawnSync } = require('child_process');
const { buildDocfx } = require('igniteui-docfx-template');
const slash = require('slash');
const path = require('path');
const browserSync = require('browser-sync').create();
const robocopy = require('robocopy');
const argv = require('yargs').argv;

const LANG = argv.lang === undefined ? "en" : argv.lang;
const DOCFX_BASE = {
    en: './en',
    jp: './jp'
};
const DOCFX_PATH = `docfx/${DOCFX_BASE[LANG]}`;
const DOCFX_TEMPLATE_GLOBAL = slash(path.join(__dirname, 'node_modules', 'igniteui-docfx-template', 'template', 'bundling.global.json'));
const DOCFX_SITE = `${DOCFX_PATH}/_site`;

const buildSite = () => {
    return buildDocfx({
        siteDir: DOCFX_SITE,
        projectDir: DOCFX_PATH,
        environment: process.env.NODE_ENV ? process.env.NODE_ENV.trim() : null
    });
}

const submoduleUpdate = (cb) => {
    try {
        spawnSync('git submodule update --init --recursive');
    } catch (err) {
        console.log(err.status);             // get the return code
        console.log(err.output.toString());  // get robocopy's full output
    }

    cb();
};


const copyRevealTopics = () => {
    return robocopy({
        source: `reveal-docs/${LANG}`,
        destination: `docfx/${LANG}/components/analytics`,
        copy: {
            subdirs: true,
            emptySubdirs: false
        },
        file: {
            excludeFiles: ['toc.yml'],
        }
    });
};

const copyRevealTOCs = () => {
    return robocopy({
        source: `reveal-docs/${LANG}`,
        destination: `docfx/${LANG}/components/analytics`,
        copy: {
            subdirs: true,
            emptySubdirs: false
        },
        files: ['toc.yml']
    });
};

const copyRevealImages = () => {
    return robocopy({
        source: `reveal-images/${LANG}`,
        destination: `docfx/${LANG}/components/analytics`,
        copy: {
            subdirs: true,
            emptySubdirs: false
        },
        file: {
            excludeFiles: ['toc.yml'],
        }
    });
};

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
        `${DOCFX_PATH}/components/**/*.md`],
        { delay: 3000, queue: false },
        series(buildSite, browserSyncReload));
    done();
}

exports.copyRevealAssets = series(copyRevealTopics, copyRevealTOCs, copyRevealImages);
exports.build = series(submoduleUpdate, this.copyRevealAssets, buildSite);
exports.serve = series(this.build, serveSite, addWatcher);
