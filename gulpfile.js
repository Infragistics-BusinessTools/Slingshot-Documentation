var gulp = require('gulp');
var del = require('del');
var flatten = require('gulp-flatten');
var es = require('event-stream');
var path = require('path');
var sequence = require("run-sequence");

const shell = require('gulp-shell');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const argv = require('yargs').argv;
const fs = require('fs');
const environmentVariablesPreConfig = require('./node_modules/igniteui-docfx-template/post-processors/PostProcessors/EnvironmentVariables/preconfig.json');

// var fileRoot = 'c:/work/NetAdvantage/DEV/XPlatform/2019.2/'

var mt = null;
var ml = null;
var transformer = null;
var loader = null;
var docs = null;

function ensureEnvironment() {
    console.log("task ensureEnvironment");
    if (mt == null) {
        mt = require('./src/ext/MarkdownTransformer');
        ml = require("./src/ext/MappingLoader");

        transformer = new mt.MarkdownTransformer();
        loader = new ml.MappingLoader();
        docs = require("./docConfig.json");
    }
}

function readApiMappings() {
    console.log("task readApiMappings");
    // return es.map(function(file, cb) {
    //     //console.log("reading mapping: " + file.path);
    //     let mapping = JSON.parse(file.contents.toString());
    //     loader.import(mapping);

    //     cb(null, file);
    // });
}

function transformFiles() {
    ensureEnvironment();
    console.log("task transformFiles");
    return es.map(function(file, cb) {

      var fileContent = file.contents.toString();
      var typeName = path.basename(path.dirname(file.path))

      console.log("task transforming: " + file.path);
      //var typeName = "CategoryChart";

      transformer.transformContent(typeName, fileContent,
      (err, results) => {
        if (err) {
            console.log("task transformFiles error");
            cb(err, null);
        }
        file.contents = new Buffer(results);

        cb(null, file);
      });
    });
  }

  function transformStaticFiles(platformName) {
    ensureEnvironment();
    console.log("task transformStaticFiles");
    return es.map(function(file, cb) {

      var fileContent = file.contents.toString();
    //   var typeName = path.basename(path.dirname(file.path))

      var replacements = docs[platformName].replacements;
      //console.log(typeName);
      //var typeName = "CategoryChart";
      for (var i = 0; i < replacements.length; i++) {
          fileContent = fileContent.replace(new RegExp(replacements[i].name, "gm"), replacements[i].value);
      }
      file.contents = new Buffer(fileContent);
      cb(null, file);
    });
  }

  function transformHeaderTemplate(platformName) {
    ensureEnvironment();
    console.log("task transformHeaderTemplate " + platformName);
    return es.map(function(file, cb) {
      if (!file.path.indexOf("head.templ.partial")) {
        cb(null, file);
        return;
      }

      var fileContent = file.contents.toString();
    //   var typeName = path.basename(path.dirname(file.path))

      fileContent = fileContent.replace(new RegExp("Native Angular", "gm"), "Native " + platformName);

      file.contents = new Buffer(fileContent);
      cb(null, file);
    });
  }

gulp.task("updateSource", function (cb) {
    console.log("task updateSource ");
    // del.sync("src/ext/**/*.*");

    // gulp.src([
    //     fileRoot + 'Source/APIRemarks/src/**/*.ts'
    // ])
    // .pipe(gulp.dest("src/ext"))
    // .on("end", function () {
    //     cb();
    // });
});


gulp.task('cleanBuild', function(cb) {
    if (PLAT === undefined) {
        del.sync("dist/**/*.*");
    }
    del.sync("dist/" + PLAT + "/**/*.*");
    cb();
    //return del.sync("apiMap/**/*.*");
});

gulp.task('cleanAngular', function(cb) {
    del.sync("dist/Angular/**/*.*");
    cb();
    //return del.sync("apiMap/Angular/**/*.*");
});

gulp.task('cleanReact', function(cb) {
    del.sync("dist/React/**/*.*");
    cb();
    //return del.sync("apiMap/Angular/**/*.*");
});

gulp.task('cleanWebComponents', function(cb) {
    del.sync("dist/WebComponents/**/*.*");
    cb();
    //return del.sync("apiMap/Angular/**/*.*");
});

gulp.task('cleanSlingshot', function(cb) {
    del.sync("dist/Slingshot/**/*.*");
    cb();
    //return del.sync("apiMap/Slingshot/**/*.*");
});

gulp.task('gatherAPIAngular', function(cb) {
    // return gulp.src([
    //     fileRoot + 'Source/*.JS/**/bin/**/Angular/*apiMap.json'
    // ])
    // .pipe(flatten())
    // .pipe(gulp.dest("apiMap/Angular"));
});

gulp.task('gatherAPIReact', function(cb) {
    // return gulp.src([
    //     fileRoot + 'Source/*.JS/**/bin/**/React/*apiMap.json'
    // ])
    // .pipe(flatten())
    // .pipe(gulp.dest("apiMap/React"));
});

gulp.task('gatherAPIWebComponents', function(cb) {
    // return gulp.src([
    //     fileRoot + 'Source/*.JS/**/bin/**/WebComponents/*apiMap.json'
    // ])
    // .pipe(flatten())
    // .pipe(gulp.dest("apiMap/WebComponents"));
});

function buildPlatform(cb, platformName, apiPlatform) {
    console.log("task buildPlatform: " + platformName.toString());
    ensureEnvironment();

    // gulp.src([
    //     './apiMap/' + platformName + '/**/*apiMap.json'
    // ])
    // .pipe(flatten())
    // .pipe(readApiMappings())
    // .on("end", () => {
    // .on("end", () => {
        transformer.configure(loader, apiPlatform, docs[platformName]);

        let sources = [
            'docTopics/**/*.md'
        ];
        if (platformName == "Angular") {
            // excluding topics for controls that are only in React product, e.g. Live-Grid
            sources = [
                'docTopics/**/*.md',
                '!docTopics/**/data-grid*.md'
            ];
        }

        gulp.src(sources)
        .pipe(transformFiles())
        .pipe(gulp.dest("dist/" + platformName))
        .on("end", function() {
            gulp.src([
                'docTopics/**/images/**/*.*'
            ])
            .pipe(gulp.dest("dist/" + platformName))
            .on("end", function () {
                if (platformName == "Angular") {
                    console.log("task buildPlatform: " + platformName + " completed");
                    cb();
                } else {
                    gulp.src([
                        'docfx/**/*.*'
                    ])
                    .pipe(transformStaticFiles(platformName))
                    .pipe(gulp.dest("dist/" + platformName))
                    .on("end", function () {
                        console.log("task buildPlatform: " + platformName + " completed");
                        cb();
                    });
                }
            });
        })
        .on("error", (err) => {
            console.log("error building platform: " + platformName.toString());
            cb(err);
        });
    // })
    // .on("error", (err) => {
    //     console.log("error building platform: " + platformName.toString());
    //     cb(err);
    // });
}

gulp.task('buildAngular', ['cleanAngular'], function(cb) {
    ensureEnvironment();

    buildPlatform(cb, "Angular", ml.APIPlatform.Angular);
});

gulp.task('buildReact', ['cleanReact'], function(cb) {
    ensureEnvironment();

    buildPlatform(cb, "React", ml.APIPlatform.React);
});

gulp.task('buildWebComponents', ['cleanWebComponents'], function(cb) {
    ensureEnvironment();

    buildPlatform(cb, "WebComponents", ml.APIPlatform.WebComponents);
});

gulp.task('buildSlingshot', ['cleanSlingshot'], function(cb) {
    ensureEnvironment();

    buildPlatform(cb, "Slingshot", ml.APIPlatform.Slingshot);
});

gulp.task('buildAll', function (cb) {
    sequence('buildSlingshot', 'buildAngular', 'buildReact', 'buildWebComponents', cb);
});

const LANG = argv.lang === undefined ? "en" : argv.lang;
const PLAT = argv.plat === undefined ? "React": argv.plat;
const DOCFX_BASE = {
    en: `./dist/${PLAT}/en`,
    jp: `./dist/${PLAT}/jp`,
    kr: `./dist/${PLAT}/kr`
};

const DOCFX_PATH = `${DOCFX_BASE[LANG]}`;
const DOCFX_CONF = `${DOCFX_PATH}/docfx.json`;
const DOCFX_TEMPLATE = path.join(__dirname, `./node_modules/igniteui-docfx-template/template`);
const DOCFX_TEMPLATE_LOCAL = path.join(__dirname, `./dist/igniteui-docfx-template/template`);
const DOCFX_SITE = `${DOCFX_PATH}/_site`;
const DOCFX_ARTICLES = `${DOCFX_PATH}/components`;

console.log("config DOCFX_PATH " + DOCFX_PATH);
console.log("config DOCFX_CONF " + DOCFX_CONF);
console.log("config DOCFX_TEMPLATE " + DOCFX_TEMPLATE);
console.log("config DOCFX_SITE " + DOCFX_SITE);

gulp.task('serve-site', () => {

    let buildTask = "";
    if (PLAT === "WebComponents") {
        buildTask = 'build-docfx-WebComponents';
    }
    else if (PLAT === "React") {
        buildTask = 'build-docfx-React';
    }
    else if (PLAT === "Angular") {
        buildTask = 'build-docfx-Angular';
    }
    else if (PLAT === "Slingshot") {
        buildTask = 'build-docfx-Slingshot';
    }
    // building docs for specific platform
    sequence(buildTask);


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
    gulp.watch(`${DOCFX_TEMPLATE}/**/*`, ['watch']);
    gulp.watch([`./docTopics/${LANG}/**/*.md`, `./docfx/${LANG}/**/*.md`, `./docTopics/${LANG}/components/**`], [buildTask]);

});

gulp.task('serve-slingshot', ['build-docfx-Slingshot'], () => {
    console.log("serving " + PLAT + " for " + LANG + " language using template " +  DOCFX_TEMPLATE);
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
    console.log("serving " + DOCFX_SITE);
    gulp.watch(`${DOCFX_TEMPLATE}/**/*`, ['watch']);
    gulp.watch([`./docTopics/${LANG}/**/*.md`, `./docfx/${LANG}/**/*.md`, `./docTopics/${LANG}/components/**`], ['build-docfx-Slingshot']);
});

gulp.task('serve-all', ['build-docfx'], () => {
    console.log("serving " + PLAT + " for " + LANG + " language using template " +  DOCFX_TEMPLATE);
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
    console.log("serving " + DOCFX_SITE);
    gulp.watch(`${DOCFX_TEMPLATE}/**/*`, ['watch']);
    gulp.watch([`./docTopics/${LANG}/**/*.md`, `./docfx/${LANG}/**/*.md`, `./docTopics/${LANG}/components/**`], ['build-docfx']);
});


gulp.task('styles', () => {
    return gulp
        .src(`${DOCFX_TEMPLATE_LOCAL}/styles/sass/main.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                browsers: ['last 2 versions'],
                cascase: false
            })
        )
        .pipe(gulp.dest(`${DOCFX_TEMPLATE_LOCAL}/styles/css`));
});

gulp.task('watch', ['build-docfx'], done => {
    browserSync.reload();
    done();
});

function platformify(json, platformName) {
    console.log("task platformify " + platformName);

    return json.replace(
        new RegExp("ignite\\-ui\\-angular", "gm"),
        "ignite-ui-" + platformName.toLowerCase()
    ).replace(
        new RegExp("angular\\-", "gm"),
        platformName.toLowerCase() + "-"
    );
}

gulp.task('post-processor-configs', ['cleanup-site'], () => {
    var environmentVariablesConfig = JSON.parse(JSON.stringify(environmentVariablesPreConfig));

    console.log("task post-processor-configs ");

    if (process.env.NODE_ENV) {
        environmentVariablesConfig.environment = process.env.NODE_ENV.trim();
    }

    environmentVariablesConfig.variables =
        environmentVariablesConfig.variables[LANG.toLowerCase().trim()][
            environmentVariablesConfig.environment
        ];

    if (!fs.existsSync(`${DOCFX_SITE}`)) {
         fs.mkdirSync(`${DOCFX_SITE}`);
    }

    fs.writeFileSync(
        `${DOCFX_SITE}/${environmentVariablesConfig._configFileName}`,
        platformify(JSON.stringify(environmentVariablesConfig), PLAT)
    );
});

gulp.task('build-site', shell.task([`docfx build ${DOCFX_CONF}`]));

gulp.task('cleanup-site', () => {
    return del([`${DOCFX_SITE}`]);
});

gulp.task('get-template', () => {
    del.sync('./dist/igniteui-docfx-template/**/*.*');
    del.sync('./dist/igniteui-docfx-template');

    return gulp
    .src([`${DOCFX_TEMPLATE}/../**/*.*`,
    `!**/head.tmpl.partial`])
    .pipe(gulp.dest(`./dist/igniteui-docfx-template`))
    .on("end", function () {
        return gulp
        .src([`${DOCFX_TEMPLATE}/../**/head.tmpl.partial`,
        ])
        .pipe(transformHeaderTemplate(PLAT))
        .pipe(gulp.dest(`./dist/igniteui-docfx-template`))
    });
});

gulp.task('build-docfx', function(cb) {
    sequence('buildAll', 'get-template', 'styles', 'cleanup-site', 'post-processor-configs', 'build-site', cb);
});

gulp.task('build-docfx-React', function(cb) {
    sequence('buildReact', 'get-template', 'styles', 'cleanup-site', 'post-processor-configs', 'build-site', cb);
});

gulp.task('build-docfx-WebComponents', function(cb) {
    sequence('buildWebComponents', 'get-template', 'styles', 'cleanup-site', 'post-processor-configs', 'build-site', cb);
});

gulp.task('build-docfx-Slingshot', function(cb) {
    sequence('buildSlingshot', 'get-template', 'styles', 'cleanup-site', 'post-processor-configs', 'build-site', cb);
});