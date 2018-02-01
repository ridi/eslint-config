module.exports = {
  extends: 'airbnb',
  'globals': {
    'React': true,
    'ReactDOM': true,
  },
  'plugins': ['react'],
  rules: {
    'react/jsx-filename-extension': [ON, { 'extensions': ['.jsx'] }],
  }
};
