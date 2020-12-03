module.exports = {
  publicPath: "./",
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: "https://localhost:5001"
  },
  lintOnSave: process.env.NODE_ENV !== "production",
  pwa: {
    name: "Tutorion",
    startUrl: "./public/index.html",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestPath: "manifest.json",
    workboxPluginMode: "InjectManifest",
    manifestOptions: {
      background_color: "#42b983"
    },
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "service-worker.js",
      // ...other Workbox options...
      exclude: [/netlify.toml/],
    }
  }
};
