module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    /* "plugin:react/recommended", */
  ],
  plugins: ["@typescript-eslint", "react", "import", "simple-import-sort"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // React, external imports
              ["^react", "^@?\\w"],
              // Everything else
              ["."],
            ],
          },
        ],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "simple-import-sort/imports": "error",
  },
};
