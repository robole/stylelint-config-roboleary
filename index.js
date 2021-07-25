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
    "a11y/no-display-none": true,
    "a11y/no-text-align-justify": true,
    "a11y/no-obsolete-attribute": true,
    "a11y/no-obsolete-element": true,
  },
};
