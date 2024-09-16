import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import tailwindcss from "eslint-plugin-tailwindcss";

export default {
  languageOptions: {
    globals: globals.browser,
  },
  plugins: {
    tailwindcss,
    react: pluginReact,
  },
  rules: {
    "tailwindcss/no-custom-classname": "warn",
  },
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
      extends: [
        pluginJs.configs.recommended,
        ...tseslint.configs.recommended,
        pluginReact.configs.flat.recommended,
        "plugin:tailwindcss/recommended",
      ],
    },
  ],
};
