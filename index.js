"use strict";

module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-idiomatic-order",
    "stylelint-a11y/recommended",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-scss", "stylelint-order", "stylelint-color-format"],
  rules: {
    "declaration-colon-newline-after": null,
    "value-list-comma-newline-after": null,
    "color-format/format": {
      format: "hsla",
    },
  },
};
