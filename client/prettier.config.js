module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 100,
  eslintIntegration: true,
  endOfLine: 'auto',
  parser: 'typescript',
  useTabs: false,
  arrowParens: 'always',
  plugins: [require('prettier-plugin-tailwindcss')],
};
