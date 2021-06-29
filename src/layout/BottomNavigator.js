import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Ripples from "react-ripples";

function BottomNavigator() {
  const Container = styled.div`
    .padding {
      margin-bottom: 56px;
    }
  `;
  const BottomNav = styled.div`
    width: 100%;
    height: 56px;
    bottom: 0;
    background-color: #ffffff;
    border-top: 1px solid #cccccc;
    position: fixed;
    z-index: 1000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      width: 100%;
      line-height: 56px;
      text-align: center;
      text-decoration: none;
      color: black;
    }
    .react-ripples {
      width: 100%;
      border-radius: 10px;
    }
    .active {
      color: red;
    }
  `;
  return (
    <Container>
      <div className="padding"></div>
      <BottomNav>
        <NavBox to="/home" text="홈" />
        <NavBox to="/main" text="메인" />
        <NavBox to="/chat" text="채팅" />
        <NavBox to="/setting" text="설정" />
      </BottomNav>
    </Container>
  );
}
function NavBox({ to, text }) {
  const Box = styled.div`
    width: 100%;
    height: 100%;
  `;
  console.log("location > ", location.pathname, to);
  const isActive = location.pathname === to;
  return (
    <Ripples>
      <NavLink
        to={to}
        replace={true}
        activeClassName="active"
        onClick={(e) => {
          if (isActive) {
            e.preventDefault();
          }
        }}
      >
        <Box>{text}</Box>
      </NavLink>
    </Ripples>
  );
}

export default BottomNavigator;
