/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly ESLINT_USE_FLAT_CONFIG: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
