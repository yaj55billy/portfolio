// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      "viewport": "width=device-width, initial-scale=1, minimum-scale=1, user-scalable=0",
      "title": "Billy's Portfolio",
      "meta": [
        { charset: 'utf-8' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'description', content: '' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: "Billy's Portfolio" },
        { property: 'og:title', content: "Billy's Portfolio" },
        { property: 'og:description', content: '' },
        { property: 'og:image', content: '' },
        { property: 'og:url', content: '' }
      ],

      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;400;700&family=Rubik:wght@500;700&display=swap'}
      ],
      script: [

      ]
    }
  },

  devtools: { enabled: true },
  css: [
    '@/assets/styles/main.sass',
  ],
  modules: ['nuxt-icon']
})
