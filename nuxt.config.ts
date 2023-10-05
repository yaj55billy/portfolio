// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      "viewport": "width=device-width, initial-scale=1, minimum-scale=1, user-scalable=0",
      "title": "Billy's Portfolio",
      "meta": [
        { charset: 'utf-8' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'description', content: 'HI，我是 Billy，有數年的前端工作經歷，因為先前工作類別接觸到較多案量，所以熟悉與 PM、設計、前後端等團隊人員合作，協同討論需求並建置出網站（如：企業形象、活動頁面），而對於工作節奏與狀況變動，也具有一定的掌握跟彈性。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: "Billy's Portfolio" },
        { property: 'og:title', content: "Billy's Portfolio" },
        { property: 'og:description', content: 'HI，我是 Billy，有數年的前端工作經歷，因為先前工作類別接觸到較多案量，所以熟悉與 PM、設計、前後端等團隊人員合作，協同討論需求並建置出網站（如：企業形象、活動頁面），而對於工作節奏與狀況變動，也具有一定的掌握跟彈性。' },
        { property: 'og:image', content: '' },
        { property: 'og:url', content: 'https://www.billyji.com/portfolio' }
      ],

      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;400;700&family=Rubik:wght@500;700&display=swap'}
      ],
    }
  },

  devtools: { enabled: true },
  css: [
    '@/assets/styles/main.sass',
  ],
  modules: ['nuxt-icon', 'vue3-carousel-nuxt'],
})
