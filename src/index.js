import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

function startApp() {
  ReactDOM.render(
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>,
    document.querySelector("#root")
  );
}
if (window.cordova) {
  document.addEventListener("deviceready", startApp, false);
} else {
  startApp();
}
