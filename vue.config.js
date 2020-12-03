module.exports = {
  publicPath: "./",
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: "https://localhost:5001"
  },
  lintOnSave: process.env.NODE_ENV !== "production",
  pwa: {
    name: "Tutorion",
    startUrl: "index.html",
    themeColor: "#1E3D58",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestPath: "manifest.json",
    manifestOptions: {
      background_color: "#1E3D58"
    },
    workboxOptions: {
      // ...other Workbox options...
      exclude: [/netlify.toml/],
    }
  }
};
