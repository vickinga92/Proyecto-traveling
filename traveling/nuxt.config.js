
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/datepicker.css',
    '@/assets/css/tooplate-style.css',
    '@/assets/font-awesome-4.7.0/css/font-awesome.css',
    '@/assets/font-awesome-4.7.0/css/font-awesome.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@plugins/filters.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/moment'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    [
      'vue-sweetalert2/nuxt',
      {
        confirmButtonColor: '#41b882',
        cancelButtonColor: '#ff7674'
      }
    ],
    [
      'nuxt-i18n',
      {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              greeting: 'Hello world!'
            },
            es: {
              greeting: '¡Hola mundo!'
            }
          }
        }
      }
    ],
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyCG63DYz2TIJTLse6RSOobh_uSm3-CYF64",
          authDomain: "traveling-112b8.firebaseapp.com",
          databaseURL: "https://traveling-112b8.firebaseio.com",
          projectId: "traveling-112b8",
          storageBucket: "traveling-112b8.appspot.com",
          messagingSenderId: "1048797411029",
          appId: "1:1048797411029:web:0f55eef7f1ba73d106d45c",
          measurementId: "G-FTNM39LZLW"
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          firestore: true,
        }
      }
    ]

  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
