# stylelint-config-roboleary

My stylelint config for linting CSS and SCSS. You can use it along side Prettier without conflicts.

It includes the following:
- The [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) config gives a core collection of rules (extending [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)). It is based on the common stylistic conventions found within a handful of CSS styleguides, including: The Idiomatic CSS Principles, Google's CSS Style Guide, Airbnb's Styleguide, and @mdo's Code Guide.
- The [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier) to disable any conflicting rules with Prettier.
- The [stylelint-scss](https://github.com/kristerkari/stylelint-scss) plugin to add more specific rules for SCSS (stylelint supports SCSS syntax by default).
- The [stylelint-order](https://github.com/hudochenkov/stylelint-order) plugin to order properties, used in conjunction with the rules contained in [stylelint-config-idiomatic-order](https://github.com/ream88/stylelint-config-idiomatic-order) config.
- The [stylelint-color-format](https://github.com/filipekiss/stylelint-color-format) plugin to format all colors as [HSLA](https://www.w3schools.com/csSref/func_hsla.asp). The color is set as HSL if opacity is 100%.
- The [stylelint-a11y](https://github.com/YozhikM/stylelint-a11y) plugin to raise accessibility issues.

## Rules changed

### [stylelint-color-format](https://github.com/filipekiss/stylelint-color-format)

- [`color-format/format`](https://github.com/filipekiss/stylelint-color-format#configuration-1):  Convert HEX colors to either RGB or HSL formats. **Set to `hsla`**.

### [stylelint-a11y](https://github.com/YozhikM/stylelint-a11y)

- [`a11y/media-prefers-reduced-motion`](https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/media-prefers-reduced-motion/README.md): Require that an animation or transition has an accompanying media *prefers-reduced-motion* media query that disables it (Autofixable). **Turned off**, being autofixable is more disruptive than useful unfortunately.

## Usage

1. Install with `npx install-peerdeps --dev stylelint-config-roboleary` to install this package along with *stylelint* (it is a peer dependency).
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
          "style-lint": "stylelint **/*.{css,scss}",
          "style-lint:fix": "npm run style-lint -- --fix",
        }
   }
   ```

1. Additionally, there are [integrations for code editors](https://stylelint.io/user-guide/integrations/editor). I use the [stylint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) for VS Code.
