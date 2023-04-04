# Introduction

This repository contains documentation files for Slingshot product. It was based on x-platform docs.

## Help Document Files

All help markdown (*.md) files in this repository are arranged under the `docfx` folder. They are organized in sub-folders for EN, JP, and KR localizations.

- `docfx\en\docs\`
- `docfx\jp\docs\`
- `docfx\kr\docs\`

NOTE: names of markdown files should be the same in all above folders, e.g.

- `docfx\en\docs\general-getting-started.md`
- `docfx\jp\docs\general-getting-started.md`
- `docfx\kr\docs\general-getting-started.md`

You can add images to help topics by uploading them first to these folders:

- `docfx\en\images\`
- `docfx\jp\images\`
- `docfx\kr\images\`

### Additional structural information

All markdown (*.md) files under the `reveal-images` folder are overriding their equivalents from the submodule to achieve unique content regarding this project.

## Help Document TOC

The table of content (TOC) files are stored in the `docfx` folder:

- `docfx\en\docs\toc.yml`
- `docfx\jp\docs\toc.yml`
- `docfx\kr\docs\toc.yml`

## Setting Up Project

### Installing DocFX

To install docfx restore it as a dotnet tool:

```bash
dotnet tool restore
```

### Installing dependencies:

Before you can contrinute to this you need to install [Yarn](https://yarnpkg.com/en/) software.

Then follow these directions

- open this repository folder in VS Code.
- click `Terminal` menu drop down
- select `New Terminal` menu option
- type this command to install dependency packages:

```cmd
yarn install
```

If you are using npm:

- install [Node.js](https://nodejs.org)
- type this command to install dependency packages:

```
npm install
```


## Building DocFX

You can transform and generate output of DocFX output files with:

```cmd
yarn build
```

or with npm:

```
npm run build
```


<!-- ```cmd
yarn run buildWebComponents
``` -->

<!--
and then examine the content of the output files in `dist` folder

You can build the site output with:

```cmd
yarn build
```

Which supports all the same command line switches. There are also production and staging variants:

```cmd
yarn build-staging --lang=jp
yarn build-staging --lang=en
yarn build-staging --lang=kr
```

```cmd
yarn build-production --lang=jp --plat=WebComponents
yarn build-production --lang=en --plat=WebComponents
yarn build-production --lang=kr --plat=WebComponents

yarn build-production --lang=jp --plat=React
yarn build-production --lang=en --plat=React
yarn build-production --lang=kr --plat=React

yarn build-production --lang=jp --plat=Angular
yarn build-production --lang=en --plat=Angular
yarn build-production --lang=kr --plat=Angular
``` -->

## Hosting DocFX

You can skip building process and just run the DocFX website with one of the following commands:

- build and host Slingshot documentation with English localization:
```cmd
yarn start
```

- build and host Slingshot documentation with Japanese localization:
```cmd
yarn start --lang=jp
```

- build and host Slingshot documentation with Korean localization:
```cmd
yarn start --lang=kr
```
NOTE: there is "=" symbol after the `lang` parameter.

Above command will watch for changes to the input md files and re-run the compile and refresh browsers if a file has changed.

<!--
Which will show you the React output by default. You can change this to by running one of the following commands with:

```cmd
yarn start --plat=WebComponents
yarn start --plat=React
yarn start --plat=Angular
```

If you want see the output for a different language you can use the lang switches:

```cmd
yarn start --lang=jp
yarn start --lang=en
yarn start --lang=kr
``` -->


