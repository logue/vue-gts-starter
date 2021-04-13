module.exports = {
  root: true,
  extends: 'stylelint-config-standard',
  plugin: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'if',
          'for',
          'each',
          'include',
          'mixin',
          'content',
        ],
      },
    ],
  },
};
