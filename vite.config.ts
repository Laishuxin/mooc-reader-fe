import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [VantResolver()],
    }),
  ],
  server: {
    port: 8009,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles'),
      plugins: path.resolve(__dirname, 'src/plugins'),
      pages: path.resolve(__dirname, 'src/pages'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      utils: path.resolve(__dirname, 'src/utils'),
      apis: path.resolve(__dirname, 'src/apis'),
      dirs: path.resolve(__dirname, 'src/directives'),
    },
  },
})
