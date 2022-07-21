module.exports = {
  parser: '@babel/eslint-parser',
  plugins: [
    '@babel',
  ],
  rules: {
    'babel/new-cap': 'warn',
    'babel/camelcase': 'warn',
    'babel/no-invalid-this': 'warn',
    'babel/object-curly-spacing': 'warn',
    'babel/quotes': 'warn',
    'babel/semi': 'warn',
    'babel/no-unused-expressions': 'warn',
    'babel/valid-typeof': 'warn',
  },
};
