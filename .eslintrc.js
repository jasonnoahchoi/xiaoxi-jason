module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    browser: true,
    node: true,
    "jest/globals": true
  },
  rules: {
    // strict: 0,
    quotes: [
      "warn",
      "single",
      { avoidEscape: true, allowTemplateLiterals: true }
    ],
    "no-debugger": 1,
    "no-console": 1,
    "no-unused-vars": ["warn", { ignoreRestSiblings: true }],
    "react/prop-types": [0, { ignore: ["children", "classes"] }],
    "prettier/prettier": "error",
    "compat/compat": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/display-name": "warn"
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
    // 'plugin:jsx-a11y/recommended',
    // 'plugin:you-dont-need-lodash-underscore/compatible',
  ],
  plugins: ["react", "react-hooks", "prettier", "compat", "jest"],
  settings: {
    react: {
      version: "16.5.2"
    },
    polyfills: ["Promise", "URL"]
  }
}
