module.exports = {
  env: {
    commonjs: true,
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 10,
  },
  plugins: ['import', 'node', 'react', 'react-hooks'],
  extends: ['airbnb-base', 'plugin:react/recommended'],
  rules: {
    'react/prop-types': 0,
    'node/no-deprecated-api': 2,
    'node/no-extraneous-require': 2,
    'node/no-missing-require': 2,
    'import/no-unresolved': [2, { commonjs: true }],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/prefer-default-export': 0,
    'import/export': 2,
    'arrow-parens': [2, 'as-needed'],
    'no-plusplus': 0,
    'no-return-assign': 0,
    'no-param-reassign': 0,
		'no-nested-ternary': 0,
		'object-curly-newline': 0
  },
};
