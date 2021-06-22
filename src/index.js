import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";

function startApp() {
  ReactDOM.render(<App />, document.querySelector("#root"));
}
if (window.cordova) {
  document.addEventListener("deviceready", startApp, false);
} else {
  startApp();
}
