const OFF = 0;
const ON = 1;
const ERROR = 2;

module.exports = {
  extends: 'airbnb',
  'globals': {
    'React': true,
    'ReactDOM': true,
  },
  'plugins': ['react'],
  rules: {
    'react/jsx-filename-extension': [ON, { 'extensions': ['.jsx'] }],
  },
};
