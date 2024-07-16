const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          // loader inform the webpack to process files as they are imported into a project
          loader: "babel-loader",
          options: {
            /**
             * @babel/preset-react is used to transpile JSX syntax
             * @babel/preset-env is used to transpile ES6, ES7 ... to a compatible version of JavaScript in current and older browsers
             * @babel/plugin-transform-runtime is used to enable new features inside the browser as async/await, for example
             */
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
