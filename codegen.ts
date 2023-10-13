import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'http://localhost:8080/v1/graphql',
  documents: './src/**/*.gql',
  generates: {
    './src/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'graphql-codegen-svelte-apollo']
    }
  }
}

export default config
