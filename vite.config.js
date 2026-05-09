import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, pathToFileURL } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue(),
      tailwindcss(), // 👉 Add this to enable Tailwind
      {
        name: 'api-chat-proxy',
        configureServer(server) {
          server.middlewares.use('/api/chat', async (req, res) => {
            if (req.method === 'OPTIONS') {
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end()
              return
            }

            if (req.method !== 'POST') {
              res.writeHead(405, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ success: false, message: 'Method Not Allowed' }))
              return
            }

            let body = ''
            req.on('data', (chunk) => { body += chunk })
            req.on('end', async () => {
              try {
                const parsed = JSON.parse(body)

                // Dynamically import the shared groqChat module (cache-busted so edits take effect)
                // Use pathToFileURL so Windows absolute paths are valid file:// URLs for the ESM loader
                const resolvedPath = resolve(__dirname, 'api/groqChat.js')
                const moduleUrl = `${pathToFileURL(resolvedPath).href}?t=${Date.now()}`
                const { createSkillSprintReply } = await import(moduleUrl)

                const reply = await createSkillSprintReply({ messages: parsed.messages, env })

                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ success: true, reply }))

              } catch (err) {
                console.error('Chat API dev proxy error:', err)
                const status = err.status || 500
                res.writeHead(status, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ success: false, message: err.message }))
              }
            })
          })
        }
      }
    ],
  }
=======
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // 👉 Add this to enable Tailwind
  ],
>>>>>>> 742411e2e2cf51cbd0c613539d1a852eee55834f
})