module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/react',
  ],
  plugins: [
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error', {
      trailingComma: 'all',
      singleQuote: true,
    }],
  },
};
