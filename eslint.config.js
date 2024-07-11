// @ts-check

import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import js from '@eslint/js';

import tseslint from 'typescript-eslint';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...eslintPluginAstro.configs.recommended,

  {
    ignores: ['src/**/_*.*', 'dist/'],
  },

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  {
    files: ['**/*.js', '**/*.mjs'],
    ...tseslint.configs.disableTypeChecked,
  },

  {
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
  },

  {
    ignores: [
      '**/_*.*',
      '**/temp.js',
      'config/*',
      'pnpm-lock.yaml',
      'types.generated.d.ts',
      '.astro/',
      'dist/',
      'my-custom-cache-directory',
      'src/env.d.ts',
    ],
  },
  eslintConfigPrettier,
);
