# stylelint-config-roboleary

My stylelint config for linting CSS and SCSS and using along with Prettier.

It includes the following:
- The [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) config gives a core collection of rules (extending [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)). It is based on the common stylistic conventions found within a handful of CSS styleguides, including: The Idiomatic CSS Principles, Google's CSS Style Guide, Airbnb's Styleguide, and @mdo's Code Guide.
- The [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier) to disable any conflicting rules with Prettier.
- The [stylelint-scss](https://github.com/kristerkari/stylelint-scss) plugin to add more specific rules for SCSS (stylelint supports SCSS syntax by default).
- The [stylelint-order](https://github.com/hudochenkov/stylelint-order) plugin to order the properties, used in conjunction with the rules contained in [stylelint-config-idiomatic-order](https://github.com/ream88/stylelint-config-idiomatic-order).
- The [stylelint-color-format](https://github.com/filipekiss/stylelint-color-format) plugin to have all colors in hsla.
- The [stylelint-a11y](https://github.com/YozhikM/stylelint-a11y) plugin to improve accessibility.

## Usage

1. Install this package with `npm i stylelint-config-roboleary`.
1. Create a stylelint config in your project directory e.g. .stylelintrc. Add the following to the file:

	```json
    {
      "extends": ["stylelint-config-roboleary"]
    }
	```

1. You can add scripts to your _package.json_ to lint and fix your code from the command-line:

   ```json
	 {
       "scripts": {
         "style-lint": "stylelint **/*.scss",
         "style-lint:fix": "npm run style-lint -- --fix",
       }
	 }
   ```

1. Additionally, there are [integrations for code editors](https://stylelint.io/user-guide/integrations/editor). I use the [stylint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) for VS Code.
