import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import TopNavigator from "../layout/TopNavigator";
import BottomNavigator from "../layout/BottomNavigator";
import Home from "./Home";
import styled from "styled-components";
import Main from "./Main";
import Chat from "./Chat";
import Setting from "./Setting";
import "./App.css";
function MenuSwitch() {
  const location = useLocation();
  const Element = styled.div``;
  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes>
            <Route path="/">
              <Home />
            </Route>
            <Route path="home">
              <Home />
            </Route>
            <Route path="main">
              <Main />
            </Route>
            <Route path="chat">
              <Chat />
            </Route>
            <Route path="setting">
              <Setting />
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}
function App() {
  const Root = styled.div``;
  console.log("location >>", location);
  return (
    <Root>
      <BrowserRouter>
        <TopNavigator />
        <MenuSwitch />
        <BottomNavigator />
      </BrowserRouter>
    </Root>
  );
}

export default App;
