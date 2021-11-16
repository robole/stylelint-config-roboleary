module.exports = {
  extends: [
    "stylelint-config-standard",
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
    "plugin/declaration-block-no-ignored-properties": true,
    "declaration-empty-line-before": [
      "always",
      {
        ignore: [
          "after-comment",
          "after-declaration",
          "first-nested",
          "inside-single-line-block",
        ],
      },
    ],
  },
};
