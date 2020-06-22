# Introduction

This repository contains documentation files for Slingshot product. It was based on x-platform docs.

## Help Document Files

All help markdown (*.md) files in this repository are arranged under the `docTopics` (not `docsfx`) folder. They are organized in sub-folders for EN, JP, and KR localizations.

- `docTopics\en\components\`
- `docTopics\jp\components\`
- `docTopics\kr\components\`

NOTE: names of markdown files should be the same in all above folders, e.g.

- `docTopics\en\components\general-getting-started.md`
- `docTopics\jp\components\general-getting-started.md`
- `docTopics\kr\components\general-getting-started.md`

You can add images to help topics by uploading them first to these folders:

- `docTopics\en\images\`
- `docTopics\jp\images\`
- `docTopics\kr\images\`

## Help Document TOC

The table of content (TOC) files are stored in the `docsfx` folder:

- `docsfx\en\components\toc.yml`
- `docsfx\jp\components\toc.yml`
- `docsfx\kr\components\toc.yml`

## Help Document Configuration

In the `docConfig.json` file, you can add entries in "[PlatformName]" => "replacements" where name is a regular expression that matches the text you wish to replace in the markdown, and value is the value you wish to have inserted.

For example with this entry:

```js
"Slingshot": {
        "replacements": [
            { "name": "{ProductName}", "value": "Slingshot" },
        ],
}
```

you can have `{ProductName}` replaced with `Ignite UI for Angular` wherever it appears in the input documentation.

# Creating Branches

- Open `Team Explorer` in Visual Studio
- Click `Manage Connection` (green) button
- Expand `IgInternalApplicationGit`
- Connect to [slingshot-docfx](http://tfs.infragistics.local:8080/tfs/Engineering/IgInternalApplicationsGit/IgInternalApplicationsGit%20Team/_git/slingshot-docfx)
 repository
- Click on Branches
- Expand `remotes/origin`
- Checkout `master` branch
- Right Click on `master` branch
- Select Pull menu item
- Right Click on `master` branch
- New `Local Branch from` menu item
- Type name of your branch
- Make changes to help topics (.md files)
- Make changes to table of content (.yml files)

# Creating Pull Requests

- Make sure you create a new branch by following above section
- Open `Team Explorer` in Visual Studio
- Open `Changes` tab
- Add a comment for your changes
- Click `Commit All` button
- Click `Sync` button
- Click `Publish` button
- Click `Create a pull request` button
- In opened website, Change from `master` branch to `master` branch
- Click `New Pull Request` button
- Send a link for your PR to a reviewer


## Setting Up Project

Before you can contrinute to this you need to install [Yarn](https://yarnpkg.com/en/) software.

Then follow these directions

- open this repository folder in VS Code.
- click `Terminal` menu drop down
- select `New Terminal` menu option
- type this command to install dependency packages:

```cmd
yarn install
```

## Building DocFX

You can transform and generate output of DocFX output files with:

```cmd
yarn build
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


