import React from "react";
import { Routes, Route, useLocation, useRoutes } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Login from "./Login";
import Home from "./Home";
import Main from "./Main";
import Chat from "./Chat";
import Setting from "./Setting";
import TopNavigator from "../layout/TopNavigator";
import BottomNavigator from "../layout/BottomNavigator";
import { useRecoilState } from "recoil";
import { naviState } from "../recoils/navi";

export default function Routing() {
  const [navi, setNavi] = useRecoilState(naviState);
  const menuList = [
    {
      path: "/home",
      element: <Home key="home" />,
      navi: {
        top: true,
        bottom: true,
      },
    },
    {
      path: "/main",
      element: <Main key="main" />,
      navi: {
        top: true,
        bottom: true,
      },
    },
    {
      path: "/chat",
      element: <Chat key="chat" />,
      navi: {
        top: true,
        bottom: true,
      },
    },
    {
      path: "/setting",
      element: <Setting key="setting" />,
      navi: {
        top: true,
        bottom: true,
      },
    },
  ];
  const routes = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/setting/test",
      element: <Test />,
      navi: {
        top: true,
        bottom: false,
      },
    },
    {
      path: "/setting/test2",
      element: <Test />,
      navi: {
        top: true,
        bottom: false,
      },
    },
  ];
  const element = useRoutes(routes);
  if (navi.path != location.pathname) {
    const target = [...menuList, ...routes].filter((menu) => menu.path == location.pathname)[0];
    if (target) {
      setNavi({
        top: target.navi?.top || false,
        bottom: target.navi?.bottom || false,
        path: location.pathname,
      });
    }
  }

  return (
    <>
      {navi.top && <TopNavigator />}
      <MainMenu menu={menuList} navi={navi} setNaviState={setNavi} />
      {navi.bottom && <BottomNavigator />}
      {element}
    </>
  );
}

function MainMenu({ menu }) {
  const location = useLocation();
  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes>
            {menu.map(({ path, element }) => {
              return (
                <Route key={path} path={path}>
                  {element}
                </Route>
              );
            })}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

function Test() {
  return <div>asd test</div>;
}
