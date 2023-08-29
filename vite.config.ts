import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteMockServe } from 'vite-plugin-mock'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias:{
      "@":path.resolve(__dirname,"src"),
      "static": path.resolve(__dirname, "static"),
      "assets": path.resolve(__dirname, "src/assets"),
      "mixins": path.resolve(__dirname, "src/mixins"),
      "comps": path.resolve(__dirname, "src/components"),
      "views": path.resolve(__dirname, "src/views"),
      "plugins": path.resolve(__dirname, "src/plugins"),
      "utils": path.resolve(__dirname, "src/utils"),
      "api": path.resolve(__dirname, "src/api"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData:`
          @import "${path.resolve(__dirname, './node_modules/ayin-lessmixins/ayin-lessmixins.less')}";
          @import "${path.resolve(__dirname, './node_modules/ayin-color/ayin-color.less')}";
          @import "${path.resolve(__dirname, './node_modules/ayin-color/ayin-color-expand.less')}";
          `
      }
    }
  },
  plugins: [
    react(),
    viteMockServe({
      supportTs: true,
      mockPath: 'mock',
    })
  ],
  optimizeDeps: {
    include: ['ayin-color'],
    exclude: ['techui-react-lite']
  },
  
})

