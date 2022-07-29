import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
    ],
    image: {
        presets: {
          lang_icon: {
            modifiers: {
              format: 'png',
              width: 50,
              height: 50
            }
          }
        }
      }
})
