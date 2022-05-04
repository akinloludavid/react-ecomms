interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_PAYSTACK_PUBLIC_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
