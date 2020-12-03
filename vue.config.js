module.exports = {
  publicPath: "./",
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: "https://localhost:5001"
  },
  lintOnSave: process.env.NODE_ENV !== "production",
  pwa: {
    name: "Tutorion",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestOptions: {
      background_color: "#42b983"
    },
  }
};
