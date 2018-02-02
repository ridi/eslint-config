module.exports = {
  extends: 'airbnb',
  globals: {
    React: true,
    ReactDOM: true,
  },
  plugins: ['react'],
  rules: {
    // JSX 파일의 확장자를 `.jsx`로 제한
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx'] }],

    // `<label>` 태그가 컨트롤을 반드시 포함하지 않아도 됨
    // 참고: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': ['error', { required: 'id' }],
  },
};
