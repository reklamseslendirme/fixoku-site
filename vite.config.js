import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createInstitutionApplicationHandler } from './api/institution-application.js'

function institutionApplicationApi() {
  const handler = createInstitutionApplicationHandler()

  return {
    name: 'fixoku-institution-application-api',
    configureServer(server) {
      server.middlewares.use('/api/institution-application', (request, response, next) => {
        handler(request, response).catch(next)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), institutionApplicationApi()],
  build: {
    rolldownOptions: {
      output: {
        manualChunks(id) {
          const normalizedId = id.replaceAll("\\", "/")
          if (!normalizedId.includes("/node_modules/")) return undefined

          if (
            normalizedId.includes("/react/") ||
            normalizedId.includes("/react-dom/") ||
            normalizedId.includes("/react-router") ||
            normalizedId.includes("/scheduler/")
          ) {
            return "react-vendor"
          }

          return undefined
        },
      },
    },
  },
})
