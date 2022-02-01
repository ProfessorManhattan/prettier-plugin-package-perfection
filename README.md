<!-- ⚠️ This README has been generated from the file(s) ".config/docs/blueprint-readme-plugin.md" ⚠️--><div align="center">
  <center>
    <a href="https://github.com/ProfessorManhattan/prettier-package-json-perfection">
      <img width="148" height="148" alt="Prettier Package JSON Prettier Plugin logo" src="https://gitlab.com/megabyte-labs/npm/plugin/prettier-package-json-perfection/-/raw/master/logo.png" />
    </a>
  </center>
</div>
<div align="center">
  <center><h1 align="center">Plugin: The Best Package JSON Prettier Plugin<i></i></h1></center>
  <center><h4 style="color: #18c3d1;">A plugin created by <a href="https://megabyte.space" target="_blank">Megabyte Labs</a></h4><i></i></center>
</div>

<div align="center">
  <h4 align="center">
    <a href="website.homepage" title="Megabyte Labs homepage" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/home-solid.svg" />
    </a>
    <a href="https://gitlab.com/megabyte-labs/npm/prettier-package-json-perfection/-/blob/master/CONTRIBUTING.md" title="Learn about contributing" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/contributing-solid.svg" />
    </a>
    <a href="chat_url" title="Slack chat room" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/chat-solid.svg" />
    </a>
    <a href="ProfessorManhattan/npm-prettier-package-json-perfection" title="GitHub mirror" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/github-solid.svg" />
    </a>
    <a href="https://gitlab.com/megabyte-labs/npm/prettier-package-json-perfection" title="GitLab repository" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/gitlab-solid.svg" />
    </a>
  </h4>
  <p align="center">
    <a href="website.npm_package/prettier-package-json-perfection" target="_blank">
      <img alt="Version: 1.0.6" src="https://img.shields.io/badge/version-1.0.6-blue.svg?cacheSeconds=2592000&style=for-the-badge" />
    </a>
    <a href="https://gitlab.com/megabyte-labs/npm/prettier-package-json-perfection/commits/master" title="GitLab CI build status" target="_blank">
      <img alt="Build status" src="https://gitlab.com/megabyte-labs/npm/prettier-package-json-perfection/badges/master/pipeline.svg">
    </a>
    <a href="website.npm_package/prettier-package-json-perfection" title="Dependency status reported by Depfu">
      <img alt="Dependency status reported by Depfu" src="https://img.shields.io/depfu/megabyte-labs/npm-prettier-package-json-perfection?style=for-the-badge&logo=npm" />
    </a>
    <a href="website.npm_package/prettier-package-json-perfection" title="Zip file size">
      <img alt="Zip file size" src="https://img.shields.io/bundlephobia/minzip/prettier-package-json-perfection?style=bad_style&logo=npm" />
    </a>
    <a href="" title="Total downloads of prettier-package-json-perfection on npmjs.org">
      <img alt="Total downloads of prettier-package-json-perfection on npmjs.org" src="https://img.shields.io/npm/dt/prettier-package-json-perfection?logo=npm&style=for-the-badge&logo=npm" />
    </a>
    <a href="website.npm_package/prettier-package-json-perfection" title="Number of vulnerabilities from Snyk scan on prettier-package-json-perfection">
      <img alt="Number of vulnerabilities from Snyk scan on prettier-package-json-perfection" src="https://img.shields.io/snyk/vulnerabilities/npm/prettier-package-json-perfection?style=for-the-badge&logo=npm" />
    </a>
    <a href="website.documentation/npm" target="_blank">
      <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?logo=readthedocs&style=for-the-badge" />
    </a>
    <a href="https://gitlab.com/megabyte-labs/npm/prettier-package-json-perfection/-/raw/master/LICENSE" target="_blank">
      <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg?style=for-the-badge" />
    </a>
  </p>
</div>

> </br><h3 align="center">**A Prettier plugin that formats the package.json file by leveraging the prettier-package-json CLI library**</h3></br>

<a href="#table-of-contents" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Usage / Installation](#usage--installation)
- [Shared Configuration](#shared-configuration)
- [Example Configuration](#example-configuration)
- [Contributing](#contributing)
- [License](#license)

<a href="#overview" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Overview

The **[prettier-package-json](https://www.npmjs.com/package/prettier-package-json)** CLI tool is easily the best `package.json` formatter available. However, despite its name, it is not a Prettier plugin. This project brings all of the great `prettier-package-json` features to Prettier as a plugin. It sorts in an opinionated style and also has some nifty features that other formatters do not have like:

- Sorting in an opinionated manner (common elements at the top of the file and everything else sorted alphabetically afterwards)
- Sorting scripts while keeping `pre` and `post` commands together
- Removing redundant or unnecessary fields in favor of more compact syntax
- More information available on the [prettier-package-json npmjs.org page](https://www.npmjs.com/package/prettier-package-json)

<a href="#requirements" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Requirements

- **[Node.js >14.18.0](repository.project.node)**
- **[Python >3.10.0](repository.project.python)**

<a href="#usage--installation" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Usage / Installation

Prettier plugins are automatically registered if their package name begins with `@prettier/plugin-`, `prettier-plugin-`, or `@<scope>/prettier-plugin-`. Since this package begins with `prettier-plugin-`, all you have to do is install it via:

```shell
npm install --save-dev prettier-plugin-package-perfection
```

That is it! You are good to go. Prettier should automatically pick up on the plugin.

<a href="#shared-configuration" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Shared Configuration

With Prettier, you can create a shared configuration that you can share across all your projects. To do this, you first have to find or create an NPM package that will house your configuration. Then, you have to set the `.prettier` key in `package.json` equal to the name of your shared configuration NPM package.

You can find an [example shared configuration NPM package here](https://github.com/ProfessorManhattan/prettier-config-sexy-mode) (check out the `src/main.ts` file to see the magic). All the configuration does is export a typical configuration with `module.exports`. This opens the door for dynamically configuring your project's configuration and keeping things DRY.

<a href="#example-configuration" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Example Configuration

Specifically including this Prettier plugin in your configuration might look something like this:

```json
{
  "bracketSpacing": true,
  "printWidth": 120,
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "useTabs": false,
  "goTemplateBracketSpacing": true,
  "overrides": [
    {
      "files": ["*.go.html"],
      "options": {
        "parser": "go-template"
      }
    },
    {
      "files": ["*.yml"],
      "options": {
        "printWidth": 160
      }
    }
  ],
  "plugins": [
    "@prettier/plugin-xml",
    "prettier-plugin-go-template",
    "prettier-plugin-ini",
    "prettier-plugin-organize-imports",
    "prettier-plugin-package-perfection",
    "prettier-plugin-properties",
    "prettier-plugin-sh"
  ]
}
```

<a href="#contributing" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ProfessorManhattan/prettier-package-json-perfection/issues). If you would like to contribute, please take a look at the [contributing guide](https://github.com/ProfessorManhattan/prettier-package-json-perfection/blob/master/CONTRIBUTING.md).

<details>
<summary><b>Sponsorship</b></summary>
<br/>
<blockquote>
<br/>
Dear Awesome Person,<br/><br/>
I create open source projects out of love. Although I have a job, shelter, and as much fast food as I can handle, it would still be pretty cool to be appreciated by the community for something I have spent a lot of time and money on. Please consider sponsoring me! Who knows? Maybe I will be able to quit my job and publish open source full time.
<br/><br/>Sincerely,<br/><br/>

**_Brian Zalewski_**<br/><br/>

</blockquote>

<a title="Support us on Open Collective" href="https://opencollective.com/megabytelabs" target="_blank">
  <img alt="Open Collective sponsors" src="https://img.shields.io/opencollective/sponsors/megabytelabs?logo=opencollective&label=OpenCollective&logoColor=white&style=for-the-badge" />
</a>
<a title="Support us on GitHub" href="https://github.com/ProfessorManhattan" target="_blank">
  <img alt="GitHub sponsors" src="https://img.shields.io/github/sponsors/ProfessorManhattan?label=GitHub%20sponsors&logo=github&style=for-the-badge" />
</a>
<a href="https://www.patreon.com/ProfessorManhattan" title="Support us on Patreon" target="_blank">
  <img alt="Patreon" src="https://img.shields.io/badge/Patreon-Support-052d49?logo=patreon&logoColor=white&style=for-the-badge" />
</a>

</details>

<a href="#license" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## License

Copyright © 2020-2021 [Megabyte LLC](https://megabyte.space). This project is [MIT](https://gitlab.com/megabyte-labs/npm/plugin/prettier-package-json-perfection/-/blob/master/LICENSE) licensed.
