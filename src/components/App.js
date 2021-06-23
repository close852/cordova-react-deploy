import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopNavigator from "../layout/TopNavigator";
import BottomNavigator from "../layout/BottomNavigator";
import Home from "./Home";
import styled from "styled-components";
import Main from "./Main";
function App() {
  const Root = styled.div``;
  console.log("location >>", location);
  return (
    <Root>
      <BrowserRouter>
        <TopNavigator />
        <TransitionGroup className="transition-group">
          <CSSTransition key={location.pathname} classNames="fade" timeout={5000}>
            <Routes>
              <Route path="home">
                <Home />
              </Route>
              <Route path="main">
                <Main />
              </Route>
              <Route path="chat">
                <div>chat!!</div>
              </Route>
              <Route path="setting">
                <div>setting!!</div>
              </Route>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <BottomNavigator />
      </BrowserRouter>
    </Root>
  );
}

export default App;
