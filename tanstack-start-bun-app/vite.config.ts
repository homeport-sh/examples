import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'

// nitro() with the bun preset makes the build a Bun server:
// .output/server/index.mjs, run with Bun
export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [nitro({ preset: 'bun' }), tanstackStart(), viteReact()],
})
