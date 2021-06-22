const path = require("path");
const webpack = require("webpack");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CleanTerminalPlugin = require("clean-terminal-webpack-plugin");

//https://webpack.js.org/concepts/
module.exports = env => {
  // $RefreshSig$ 오류, plugin 남아 있을 때 오류 발생.
  let pluginsRules = [
    "@babel/plugin-proposal-class-properties",
    //* build할 때 플러그인 주석필요.
    "react-refresh/babel",
    //*/
  ];
  let pluginsClass = [
    new webpack.LoaderOptionsPlugin({ debug: true }),
    //* build할 때 플러그인 주석필요.
    new RefreshWebpackPlugin(),
    new CleanTerminalPlugin(),
    //*/
  ];
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
            plugins: env.build ? [] : pluginsRules,
          },
        },
      ],
    },
    plugins: env.build ? [] : pluginsClass,
    output: {
      path: path.join(__dirname, "build"), // 절대경로를 표시
      filename: "app.js",
      publicPath: "/build/", //express.static 처럼 경로를 나타냄
    }, //출력
    devServer: {
      publicPath: "/build/",
      hot: true,
      port: 3000,
    },
  };
};
