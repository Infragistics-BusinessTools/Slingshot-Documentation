const { series, watch, src, dest, parallel} = require('gulp');
const { buildDocfx } = require('igniteui-docfx-template');
const slash = require('slash');
const replace = require('gulp-replace');
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

//Regexes for replacement of Reveal sources with Slinghot
const REVEAL_HREF_REGEX = /~\/en\//g;
const REVEAL_DOWNLOAD_LINK_REGEX = /http:\/\/download\.infragistics\.com\/(reportplus|reveal)\//g;
const REVEAL_DASHBOARD_AND_VISUALIZATION_TUTORIAL_LINK_REGEX = /http:\/\/download\.infragistics\.com\/(reportplus|reveal)\/help\/samples\/Reveal/g;
const REVEAL_DATASET_LINK_REGEX = /http:\/\/download\.infragistics\.com\/(reportplus|reveal)\/help\/samples\/HR\%20Dataset_2016/g;
const REVEAL_RETAIL_STORE_LINK_REGEX = /http:\/\/download\.infragistics\.com\/(reportplus|reveal)\/help\/samples\/Retail_Store/g;

const copyRevealTopicsAndTOCs = () => {
    return src(`reveal-docs/${LANG}/**`)
        .pipe(
            dest(`docfx/${LANG}/docs/analytics`)
        );
};

const overwriteRevealFiles = () => {
    return src([`reveal-images/${LANG}/**`])
        .pipe(
            dest(`docfx/${LANG}/docs/analytics`)
        );
};

const replaceRevealContents = () => {
    return src(`docfx/${LANG}/docs/analytics/**/*.md`)
        .pipe(replace(REVEAL_HREF_REGEX, '~/docs/analytics/'))
        .pipe(replace(REVEAL_DASHBOARD_AND_VISUALIZATION_TUTORIAL_LINK_REGEX, 'https://download.infragistics.com/slingshot/samples/Slingshot'))
        .pipe(replace(REVEAL_DATASET_LINK_REGEX, 'https://download.infragistics.com/slingshot/samples/HR_Dataset_2016'))
        .pipe(replace(REVEAL_RETAIL_STORE_LINK_REGEX, 'https://download.infragistics.com/slingshot/samples/Retail-Store'))
        .pipe(replace(REVEAL_DOWNLOAD_LINK_REGEX, 'https://download.infragistics.com/slingshot/'))
        .pipe(replace('Reveal', 'Analytics'))
        .pipe(
            dest(`docfx/${LANG}/docs/analytics`)
        );
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

exports['ci-assets-copy'] = series(copyRevealTopicsAndTOCs, overwriteRevealFiles, replaceRevealContents);
exports['ci-build'] = series(this['ci-assets-copy'], buildSite);

exports.copyRevealAssets = series(copyRevealTopicsAndTOCs, overwriteRevealFiles, replaceRevealContents);
exports.build = series(this.copyRevealAssets, buildSite);
exports.serve = series(this.build, serveSite, addWatcher);
