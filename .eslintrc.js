module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "react/prop-types": [0],
    "@typescript-eslint/ban-ts-comment": [1],
    "arrow-body-style": ["warn", "as-needed"],
    "react/self-closing-comp": [1],
    "react/no-unescaped-entities": [0],
    "no-console": ["warn", { allow: ["error", "log"] }]
  }
};
