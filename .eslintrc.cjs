module.exports = {
  root: true,
  env: { browser: true, es2022: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules/'],
  parserOptions: { ecmaVersion: 2022, sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react', 'react-hooks', 'react-refresh'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-refresh/only-export-components': [
      'warn',
      { allowMutableExports: true },
    ],
  },
};
