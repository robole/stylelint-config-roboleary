module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-a11y/recommended",
    "stylelint-config-idiomatic-order",
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
  },
};
