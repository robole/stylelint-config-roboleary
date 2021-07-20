"use strict";

module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-idiomatic-order",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    "declaration-colon-newline-after": null,
    "value-list-comma-newline-after": null,
  },
};
