const { resolve } = require("path");

module.exports = {
  base: "/",
  title: "92-prozent-chaos",
  // head: [
    // ['link', { rel: 'icon', href: '/assets/img/avatar.jpg' }],S
  // ],
  description: "Frotend programming",
  output: resolve(__dirname, "dist"),
  plugins: {
    "vuepress-plugin-clean-urls": true,
    "@vuepress/plugin-nprogress": true,
    "@vuepress/back-to-top": true,
    "@vuepress/medium-zoom": {
      selector: 'img',
    },
  },
  permalink: ':slug',
  // serviceWorker: {
  //   updatePopup: {
  //     message: "Neuer Content verfügbar!",
  //     buttonText: "Neu laden"
  //   }
  // },
  themeConfig: {
    minimumFeaturedArticles: 3,
    featuredArticles: ["angular-cli-quick-start/"],
    nav: [
      { text: "Home", link: "/" },
      // { text: 'About', link: '/about/' },
      { text: "Blog", link: "/articles/", exact: false }
    ]
  },
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer"),
    ]
  },
  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.node.set("Buffer", false);

      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router)[\\/]/,
            name: "vendor.vue",
            chunks: "all"
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: "vendor.commons",
            chunks: "all"
          }
        }
      });
    }
  }
};
