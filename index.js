const { propertyOrdering } = require("stylelint-semantic-groups");

module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-a11y/recommended",
    "stylelint-config-prettier",
  ],
  plugins: [
    "stylelint-scss",
    "stylelint-order",
    "stylelint-color-format",
    "stylelint-declaration-block-no-ignored-properties",
  ],
  rules: {
    "color-format/format": {
      format: "hsla",
    },
    "a11y/media-prefers-reduced-motion": null,
    "order/order": [
      "custom-properties",
      "dollar-variables",
      "declarations",
      "at-rules", // <-- important, `@media` should go before `&:pseudo`
      "rules",
    ],
    "order/properties-order": propertyOrdering,
  },
};
