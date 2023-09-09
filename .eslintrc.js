module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': 'google',
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'semi': 'off',
    'quotes': ['error', 'single'],
    'linebreak-style': ['error', 'unix'],
    'object-curly-spacing': ['warn', 'always'],
    'require-jsdoc': 'off',
  },
};
