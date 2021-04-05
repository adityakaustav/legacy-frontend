/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  rules: {
    "react/jsx-filename-extension": "off",
    "no-unused-vars": 1,
    "no-multiple-empty-lines": 2,
    "class-methods-use-this": 0,
    "comma-dangle": ["error", "never"],
    "no-console": ["error", {allow: ["warn", "log"]}],
    "prettier/prettier": ["error", {singleQuote: false}],
    "import/prefer-default-export": "off",

    // allow paren-less arrow functions
    "arrow-parens": process.env.NODE_ENV === "production" ? 2 : 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
  },
};
