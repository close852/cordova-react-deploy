const path = require("path");
const webpack = require("webpack");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CleanTerminalPlugin = require("clean-terminal-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//https://webpack.js.org/concepts/
module.exports = (env) => {
  const isEnvDevelopment = env.mode === "development";
  const isEnvProduction = env.mode === "production";
  return {
    name: "default-setting",
    mode: env.mode || "development",
    devtool: "eval", //빠르게...? ,hidden-source-map

    resolve: {
      alias: {
        components: path.join(__dirname, "src/components"),
      },
      extensions: [".js", ".jsx"], // entry ->app 에 확장자 지정
    },
    entry: {
      app: ["./src/index"], //, "./src/index.jsx" 내부에서 참조하는 jsx는 선언 안해도 알아서 웹팩이 해줌.
    }, //입력
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.jsx?/,
          loader: "babel-loader",
          options: {
            presets: [
              //presets : plugins 들의 모음
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: ["last 2 chrome versions"], //https://github.com/browserslist/browserslist
                  },
                  debug: true,
                },
              ],
              "@babel/preset-react",
            ],
            plugins: [isEnvDevelopment && "@babel/plugin-proposal-class-properties", isEnvDevelopment && "react-refresh/babel"].filter(Boolean),
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "./index.html",
      }),
      isEnvDevelopment && new webpack.LoaderOptionsPlugin({ debug: true }),
      isEnvDevelopment && new RefreshWebpackPlugin(),
      isEnvDevelopment && new CleanTerminalPlugin(),
    ].filter(Boolean),
    output: {
      path: path.join(__dirname, "build"), // 절대경로를 표시
      filename: "public/app.js",
      // publicPath: "/", //express.static 처럼 경로를 나타냄
    }, //출력
    devServer: {
      publicPath: "/",
      hot: true,
      port: 3000,
      historyApiFallback: true,
    },
  };
};
