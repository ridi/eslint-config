module.exports = {
  extends: [
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error', {
      trailingComma: 'all',
      singleQuote: true,
    }],
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-arrow-callback': 'error',
    curly: ['error', 'all'],
    'lines-around-comment': ['error', {
      beforeBlockComment: true,
      afterBlockComment: true,
      beforeLineComment: true,
      afterLineComment: true,
      allowBlockStart: true,
      allowBlockEnd: true,
      allowObjectStart: true,
      allowObjectEnd: true,
      allowArrayStart: true,
      allowArrayEnd: true,
    }],
    'max-len': 'off',
    'no-confusing-arrow': ['error', {
      allowParens: false,
    }],
    'no-mixed-operators': 'error',
    'no-tabs': 'error',
    quotes: ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: false,
    }],
  },
};
