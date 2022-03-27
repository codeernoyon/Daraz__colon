module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'linebreak-style': 0,
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'max-len': 0,
    'jsx-a11y/img-redundant-alt': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    "prefer-template": 0,
    quotes: 0,
    "comma-dangle": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "no-unused-vars": 0,
    "no-sequences": 0,
    "no-multiple-empty-lines": 0,
    "no-lone-blocks": 1,
    "jsx-a11y/mouse-events-have-key-events": 0
  },

};
