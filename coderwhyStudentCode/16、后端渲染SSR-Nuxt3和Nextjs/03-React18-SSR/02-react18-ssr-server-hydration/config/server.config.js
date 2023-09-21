let path = require("path");
let nodeExternals = require("webpack-node-externals");
module.exports = {
  target: "node", // fs path
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    filename: "server_bundle.js",
    path: path.resolve(__dirname, "../build/server"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx", ".vue"],
  },
  externals: [nodeExternals()],
};
