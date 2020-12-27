/* eslint-disable max-len */
/*
  https://github.com/airbnb/javascript/tree/b30b0e4d917bf74d90cc39c4d74237957fe7b603/packages/eslint-config-airbnb-base/rules
  Read this files, make sure turn eslint-javascript rule off before enableing typescript version.
*/
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: ['./tsconfig.json'], // Specify it only for TypeScript files
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    // https://github.com/airbnb/javascript/blob/b30b0e4d917bf74d90cc39c4d74237957fe7b603/packages/eslint-config-airbnb-base/rules/variables.js#L34
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    // https://github.com/airbnb/javascript/blob/1f786e154f6c32385607e1688370d7f2d053f88f/packages/eslint-config-airbnb-base/rules/best-practices.js#L287
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': ['error'],

    // https://github.com/airbnb/javascript/blob/1f786e154f6c32385607e1688370d7f2d053f88f/packages/eslint-config-airbnb-base/rules/best-practices.js#L294-L298
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    // https://github.com/airbnb/javascript/blob/b30b0e4d917bf74d90cc39c4d74237957fe7b603/packages/eslint-config-airbnb-base/rules/variables.js#L51
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // https://github.com/airbnb/javascript/blob/b30b0e4d917bf74d90cc39c4d74237957fe7b603/packages/eslint-config-airbnb-base/rules/variables.js#L54
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true, variables: true }],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // https://github.com/airbnb/javascript/blob/1f786e154f6c32385607e1688370d7f2d053f88f/packages/eslint-config-airbnb-base/rules/best-practices.js#L350
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',

    // https://github.com/airbnb/javascript/blob/1f786e154f6c32385607e1688370d7f2d053f88f/packages/eslint-config-airbnb-base/rules/best-practices.js#L269
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'error',

    // https://github.com/airbnb/javascript/blob/1f786e154f6c32385607e1688370d7f2d053f88f/packages/eslint-config-airbnb-base/rules/best-practices.js#L221
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    // https://github.com/airbnb/javascript/blob/1f786e154f6c32385607e1688370d7f2d053f88f/packages/eslint-config-airbnb-base/rules/best-practices.js#L160-L166
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': ['off', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    // https://github.com/airbnb/javascript/blob/5ebfe3e5b8b72f301228cc1718685d1db9ae5f49/packages/eslint-config-airbnb-base/rules/errors.js#L97
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'off',

    // https://github.com/airbnb/javascript/blob/1f786e154f6c32385607e1688370d7f2d053f88f/packages/eslint-config-airbnb-base/rules/best-practices.js#L157
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    // https://github.com/airbnb/javascript/blob/1f786e154f6c32385607e1688370d7f2d053f88f/packages/eslint-config-airbnb-base/rules/best-practices.js#L145
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    // https://github.com/airbnb/javascript/blob/1f786e154f6c32385607e1688370d7f2d053f88f/packages/eslint-config-airbnb-base/rules/best-practices.js#L142
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',

    // https://github.com/airbnb/javascript/blob/1f786e154f6c32385607e1688370d7f2d053f88f/packages/eslint-config-airbnb-base/rules/best-practices.js#L88-L94
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ],
    }],

    // https://github.com/airbnb/javascript/blob/5ebfe3e5b8b72f301228cc1718685d1db9ae5f49/packages/eslint-config-airbnb-base/rules/es6.js#L57
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'off',

    // https://github.com/airbnb/javascript/blob/5ebfe3e5b8b72f301228cc1718685d1db9ae5f49/packages/eslint-config-airbnb-base/rules/es6.js#L52
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'off',

    // https://github.com/airbnb/javascript/blob/63098cbb6c05376dbefc9a91351f5727540c1ce1/packages/eslint-config-airbnb-base/rules/style.js#L276
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    // https://github.com/airbnb/javascript/blob/63098cbb6c05376dbefc9a91351f5727540c1ce1/packages/eslint-config-airbnb-base/rules/style.js#L188
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

    // https://github.com/airbnb/javascript/blob/b30b0e4d917bf74d90cc39c4d74237957fe7b603/packages/eslint-config-airbnb-base/rules/variables.js#L6
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'off',

    // https://github.com/airbnb/javascript/blob/1f786e154f6c32385607e1688370d7f2d053f88f/packages/eslint-config-airbnb-base/rules/best-practices.js#L41
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

    // https://github.com/airbnb/javascript/blob/1f786e154f6c32385607e1688370d7f2d053f88f/packages/eslint-config-airbnb-base/rules/best-practices.js#L38
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'off',

    // https://github.com/airbnb/javascript/blob/63098cbb6c05376dbefc9a91351f5727540c1ce1/packages/eslint-config-airbnb-base/rules/style.js#L21
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // https://github.com/airbnb/javascript/blob/63098cbb6c05376dbefc9a91351f5727540c1ce1/packages/eslint-config-airbnb-base/rules/style.js#L42-L48
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    // https://github.com/airbnb/javascript/blob/63098cbb6c05376dbefc9a91351f5727540c1ce1/packages/eslint-config-airbnb-base/rules/style.js#L51
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],

    // https://github.com/airbnb/javascript/blob/63098cbb6c05376dbefc9a91351f5727540c1ce1/packages/eslint-config-airbnb-base/rules/style.js#L85
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],

    // https://github.com/airbnb/javascript/blob/63098cbb6c05376dbefc9a91351f5727540c1ce1/packages/eslint-config-airbnb-base/rules/style.js#L130-L153
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false,
    }],
  },
};
