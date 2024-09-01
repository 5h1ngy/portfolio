const path = require('path')

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: { version: '18.2' },
    'import/resolver': {
      alias: {
        map: [
          ['@app/assets', path.resolve(__dirname, 'app', 'src', 'assets')],
          ['@app/components', path.resolve(__dirname, 'app', 'src', 'components')],
          ['@app/containers', path.resolve(__dirname, 'app', 'src', 'containers')],
          ['@app/hocs', path.resolve(__dirname, 'app', 'src', 'hocs')],
          ['@app/pages', path.resolve(__dirname, 'app', 'src', 'pages')],
          ['@app/services', path.resolve(__dirname, 'app', 'src', 'services')],
          ['@app/store', path.resolve(__dirname, 'app', 'src', 'store')],
          ['@app/theme', path.resolve(__dirname, 'app', 'src', 'theme')],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  },
  plugins: ['react-refresh', 'jsdoc', "chakra-ui"],
  rules: {
    "jsdoc/no-undefined-types": 1,
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "chakra-ui/props-order": "error",
    "chakra-ui/props-shorthand": "error",
    "chakra-ui/require-specific-component": "error",
  },
}