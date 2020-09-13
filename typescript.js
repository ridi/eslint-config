module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json', // required for plugin:@typescript-eslint/recommended-requiring-type-checking
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    './base.js',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
};
