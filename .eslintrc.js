module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    './node_modules/gts',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    'plugin:vue/essential',
    '@vue/prettier/@typescript-eslint',
  ],
  plugins: ['vue', 'tsdoc', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'node/no-extraneous-import': 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
