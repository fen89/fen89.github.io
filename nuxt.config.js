const path = require('path')
const baseUrl = process.env.BASE_URL || 'http://92-prozent-chaos.de'

export default {
  mode: 'universal',

  target: 'static',

  components: true,
  env: {
    baseUrl
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap'
      // },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap'
      }
    ],
    bodyAttrs: {
      class: [
        'font-sans transition-colors duration-300 ease-linear'
      ]
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/global-components',
    '~/plugins/filters',
    '~/plugins/vue-lazyload'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxt/content',
    // 'nuxt-purgecss'
  ],
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const readingTime = require('reading-time')
        const { text } = readingTime(document.text, { lang: 'de' })

        document.readingTime = text
        document.content = document.text
      }
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  generate: {
    fallback: '404.html'
  },
  // purgeCSS: {
  //   mode: 'postcss',
  //   enabled: process.env.NODE_ENV === 'production'
  // },
  tailwindcss: {
    cssPath: '~/assets/scss/main.scss'
  },
  content: {
    markdown: {
      prism: {
        // theme: 'prism-themes/themes/prism-material-dark.css'
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    extractCss: {
      allChunks: true
    },
    postcss: {
      plugins: {
        // 'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        // 'postcss-nested': {}
      }
    },
    preset: {
      stage: 1 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
    }
  }
}
