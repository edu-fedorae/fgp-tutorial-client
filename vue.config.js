module.exports = {
  publicPath: "./",
  transpileDependencies: ["vuetify"],
  devServer: {
    // proxy: "https://localhost:5001"
    proxy: "https://api-tutorion.herokuapp.com"
  },
  lintOnSave: process.env.NODE_ENV !== "production",
  pwa: {
    name: "Tutorion",
    startUrl: "index.html",
    themeColor: "#1E3D58",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "default",
    manifestPath: "manifest.json",
    manifestOptions: {
        background_color: "#1E3D58"
    },
    iconPaths: {
        favicon32: 'img/icons/favicon-32x32.png',
        favicon16: 'img/icons/favicon-16x16.png',
        appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
        maskIcon: 'img/icons/safari-pinned-tab.svg',
        msTileImage: 'img/icons/msapplication-icon-144x144.png'
    },
    workboxOptions: {
    // ...other Workbox options...
    exclude: [/netlify.toml/],
    }
  }
};
