import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'

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
})
