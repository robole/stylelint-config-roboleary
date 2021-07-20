# stylelint-config-roboleary

My stylelint config for linting CSS and SCSS and using along with Prettier.

It includes the following:
- The *stylelint-config-standard* config to give a core collection of rules. Based on common stylistic conventions found within a handful of CSS styleguides, including Google’s CSS Style Guide, Airbnb’s Styleguide and others.
- The *stylelint-config-prettier* config to disable any conflicting rules with Prettier.
- The *stylelint-scss* plugin to handle SCSS,
- The *stylelint-order* plugin to order the properties according to the rules contained in the *stylelint-config-idiomatic-order* config.

## Usage

1. Install this package with `npm i stylelint-config-roboleary`.
2. Create a stylelint config in your project directory e.g. .stylelintrc. Add the following to the file:

```json
{
    "extends": ["stylelint-config-roboleary"],
}
```
