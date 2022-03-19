module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    // '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020
    // parser: "@typescript-parser/parser",
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: [2, 'single']
    // 'prettier/prettier': 'error'
  },
  plugins: [
    'prettier'
    //  "@typescript-parser"
  ]
};
