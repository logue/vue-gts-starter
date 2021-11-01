/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    './node_modules/gts',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    '@vue/prettier',
    '@vue/typescript',
    '@vue/typescript/recommended',
    '@vue/prettier/@typescript-eslint',
  ],
  plugins: ['vue', 'prettier', '@typescript-eslint/eslint-plugin'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
