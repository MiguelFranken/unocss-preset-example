import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import path from 'node:path'

import { presetMini } from "@denkwerk/unocss-preset"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets: [
        presetMini()
      ]
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, 'src/locales/**')],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
