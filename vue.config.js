module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: "https://localhost:5001"
  },
  lintOnSave: process.env.NODE_ENV !== 'production'
};
