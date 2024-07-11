/// <reference types="astro/client" />
declare const myString: string;
declare function myFunction(): boolean;
interface ImportMetaEnv {
  readonly ESLINT_USE_FLAT_CONFIG: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
