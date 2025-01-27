module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test-task/'
    : '/',
  devServer: {
    proxy: "http://api.tvmaze.com/",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,GET",
      "Access-Control-Allow-Headers": "*"
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/scss/entry.scss";`
      }
    }
  }
};
