// @ts-check
// import { fixupConfigRules } from "@eslint/compat";
import astroParser from 'astro-eslint-parser';
import astro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import js from '@eslint/js';
// import preact from 'eslint-config-preact';
import jsxA11y from 'eslint-plugin-jsx-a11y';

import tseslint from 'typescript-eslint';
const extraFileExtensions = ['.astro'];
export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...astro.configs.recommended,
  jsxA11y.flatConfigs.strict,
  // ...fixupConfigRules(jsxA11y["recommended"]),
  // ...fixupConfigRules(preact['recommended']),
  // ...preact.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions,
        ecmaFeatures: {
          jsx: true,
        },
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
