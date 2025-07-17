import globals from "globals";
import pluginSecurity from "eslint-plugin-security";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        ...globals.browser
      }
    },
    plugins: {
      security: pluginSecurity
    },
    rules: {
      // Your existing rules
      "no-unused-vars": "warn",
      "no-console": "off",
      "semi": ["error", "always"],
      // Security rules
      "security/detect-eval-with-expression": "error"
    }
  }
];