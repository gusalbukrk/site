module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-prettier',
  ],
  rules: {
    'prettier/prettier': true,
    'order/properties-alphabetical-order': true,
  },
  ignoreFiles: ['src/xlorem/*.css'],
}
