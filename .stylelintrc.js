module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-order', 'stylelint-csstree-validator'],
  rules: {
    'csstree/validator': {
      ignore: ['font-display'],
    },
    'string-quotes': 'single',
    'at-rule-no-unknown': [true, { ignoreAtRules: ['use'] }],
  },
};
