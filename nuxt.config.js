  export default {
  head: {
    title: "Rosuniversitet",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["ant-design-vue/dist/antd.css", "@/assets/css/main.css"],

  plugins: ["@/plugins/antd-ui", { src: "~plugins/v-mask.js", ssr: false }, { src: "~plugins/chat.js", ssr: false }],

  components: true,

  buildModules: [],

  modules: ["@nuxtjs/axios", "@nuxtjs/i18n",'@nuxtjs/google-fonts',],

  axios: {
    baseURL: process.env.BASE_URL || "https://admin.rosuniversitet.ru/api",
  },
  googleFonts: {
    families: {
      'Golos Text': [400,500,600,700,800,900],
      'Unbounded': [200,400,500,600,700,800,900]
    },
    display: 'swap'
  },
  build: {
    babel: {
      compact: true,
    },
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: "encoding",
        },
      ];
    },
  },
 server: {
   host: 'localhost',
   port: 8000
 },
  i18n: {
    locales: ["ru", "en", "uz"],
    defaultLocale: "ru",
    vueI18n: {
      fallbackLocale: "ru",
    },
  },
};
