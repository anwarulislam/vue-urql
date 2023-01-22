import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000",
  documents: ["src/**/*.graphql"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/graphql.ts": {
      config: {
        useTypeImports: true,
      },
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-urql-graphcache",
        "typed-document-node",
      ],
    },
  },
};

export default config;
