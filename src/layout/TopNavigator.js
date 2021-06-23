import React from "react";
import styled from "styled-components";
import { IoSearchOutline, IoMenuOutline, IoMegaphoneOutline } from "react-icons/io5";
function TopNavigator() {
  const Container = styled.div`
    .top-space {
      margin-top: 56px;
    }
  `;
  const TopBar = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0px;
    width: 100%;
    height: 56px;
    border-bottom: 1px solid #cccccc;
    background-color: #ffffff;
    display: flex;
    align-items: center;

    .rightButton {
      margin-left: auto;
      /* margin-right: 10px; */
    }
    .rightButton svg {
      margin-right: 10px;
    }
    svg {
      -webkit-text-stroke: 1px background-color !important;
    }
  `;
  return (
    <Container>
      <TopBar>
        <div className="rightButton">
          <IoSearchOutline size="35px" />
          <IoMenuOutline size="35px" />
          <IoMegaphoneOutline size="35px" />
        </div>
      </TopBar>
      <div className="top-space"></div>
    </Container>
  );
}

export default TopNavigator;
