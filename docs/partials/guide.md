## Usage / Installation

Prettier plugins are automatically registered if their package name begins with `@prettier/plugin-`, `prettier-plugin-`, or `@<scope>/prettier-plugin-`. Since this package begins with `prettier-plugin-`, all you have to do is install it via:

```shell
npm install --save-dev prettier-plugin-package-perfection
```

That is it! You are good to go. Prettier should automatically pick up on the plugin.

## Shared Configuration

With Prettier, you can create a shared configuration that you can share across all your projects. To do this, you first have to find or create an NPM package that will house your configuration. Then, you have to set the `.prettier` key in `package.json` equal to the name of your shared configuration NPM package.

You can find an [example shared configuration NPM package here](https://github.com/ProfessorManhattan/prettier-config-sexy-mode) (check out the `src/main.ts` file to see the magic). All the configuration does is export a typical configuration with `module.exports`. This opens the door for dynamically configuring your project's configuration and keeping things DRY.

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
