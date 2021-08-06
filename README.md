# stylelint-config-roboleary

My stylelint config for linting CSS and SCSS. You can use it along side Prettier without conflicts.

It includes the following:
- The [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) config gives a core collection of rules (extending [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)). It is based on the common stylistic conventions found within a handful of CSS styleguides, including: The Idiomatic CSS Principles, Google's CSS Style Guide, Airbnb's Styleguide, and @mdo's Code Guide.
- The [stylelint-scss](https://github.com/kristerkari/stylelint-scss) plugin to add more specific rules for SCSS (stylelint supports SCSS syntax by default).
- The [stylelint-order](https://github.com/hudochenkov/stylelint-order) plugin to order properties into groups, used in conjunction with the rules contained in [stylelint-config-idiomatic-order](https://github.com/ream88/stylelint-config-idiomatic-order).
- The [stylelint-color-format](https://github.com/filipekiss/stylelint-color-format) plugin to format all colors as [HSLA](https://www.w3schools.com/csSref/func_hsla.asp). The color is set as HSL if opacity is 100%.
- The [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties) checks for property values that are ignored due to another property value in the same rule e.g. using `display: inline` with `width` or `height`.
- The [stylelint-a11y](https://github.com/YozhikM/stylelint-a11y) plugin to raise some accessibility issues.
- The [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier) to disable any conflicting rules with Prettier. This should always be the last referenced config, so that it's rules are not overwritten.

## Rules changed

### [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

- [`declaration-empty-line-before`](https://stylelint.io/user-guide/rules/list/declaration-empty-line-before/): Effectively turn off the rule through ignore option. This clears the way for the ordering plugin to add blank lines.

### [stylelint-color-format](https://github.com/filipekiss/stylelint-color-format)

- [`color-format/format`](https://github.com/filipekiss/stylelint-color-format#configuration-1):  Convert HEX colors to either RGB or HSL formats. **Set to `hsla`**.

### [stylelint-a11y](https://github.com/YozhikM/stylelint-a11y)

- [`a11y/media-prefers-reduced-motion`](https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/media-prefers-reduced-motion/README.md): Require that an animation or transition has an accompanying media *prefers-reduced-motion* media query that disables it (Autofixable). **Turned off**, being autofixable is more disruptive than useful unfortunately.

### [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties)

- `plugin/declaration-block-no-ignored-properties`: This rule needs to be **set to `true` to enable the plugin**.

### [stylelint-a11y](https://github.com/YozhikM/stylelint-a11y)

- [no-display-none](https://github.com/YozhikM/stylelint-a11y/blob/HEAD/src/rules/no-display-none/README.md): Disallow content hiding with `display: none` property. **Set to `true` to enable rule.**
- [no-obsolete-attribute](https://github.com/YozhikM/stylelint-a11y/blob/HEAD/src/rules/no-obsolete-attribute/README.md): **Set to `true` to enable rule.**
- [no-obsolete-element](https://github.com/YozhikM/stylelint-a11y/blob/HEAD/src/rules/no-obsolete-element/README.md): **Set to `true` to enable rule.**

## Usage

1. Install this package along with *stylelint* `npm install --save-dev stylelint-config-roboleary stylelint` as *devDependencies*.
1. Create a stylelint config in your project directory e.g. *.stylelintrc*. Add the following to the file:

	```json
    {
      "extends": ["stylelint-config-roboleary"]
    }
	```

1. You can add scripts to your _package.json_ to lint and fix your code from the command-line:

   ```json
   {
        "scripts": {
          "lint": "stylelint **/*.{css,scss}",
          "lint:fix": "npm run style-lint -- --fix",
        }
   }
   ```

1. Additionally, there are [integrations for code editors](https://stylelint.io/user-guide/integrations/editor). I use the [stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) for VS Code.

## Configuration in VS Code

If you want to use stylelint and Prettier in VS Code, I recommend installing these 3 extensions: [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), and [Format Code Action](https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action&ssr=false#review-details) to enable Prettier to be run as a code action.

To format and lint CSS/SCSS code on save, you can update your user settings with the following:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": [
    "source.formatDocument",
    "source.fixAll"
  ],
}
```

## Show gratitude

If this helped you, please star the repo to help others find it. 🌟

You can [make a donation](https://ko-fi.com/roboleary) to enable me to make more great open-source software and tutorials. 🙏
