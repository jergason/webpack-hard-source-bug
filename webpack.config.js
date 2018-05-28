const HardSource = require("hard-source-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["apply-loader", "pug-loader"]
      }
    ]
  },
  plugins: [new HardSource()]
};
