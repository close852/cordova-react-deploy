import React from "react";
import styled from "styled-components";
import { IoHeartOutline, IoChatbubbleOutline } from "react-icons/io5";

function Home() {
  const Container = styled.div`
    .notice {
      height: 40px;
      display: flex;
      align-items: center;
      margin-left: 5px;
    }
    .notice div {
      margin-left: auto;
      margin-right: 10px;
    }
  `;
  let size = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  const listData = size.map((item) => <Item />);
  return (
    <Container>
      <div className="notice">
        새소식
        <div>&gt;</div>
      </div>
      {/* <Item /> */}
      {listData}
    </Container>
  );
}

function Item() {
  const Element = styled.div`
    width: 100%;
    height: 140px;
    background-color: #ffffff;
    display: flex;
    border-bottom: 1px solid #cccccc;
  `;
  const Thumb = styled.div`
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 3px;
      background-color: black;
    }
  `;
  const Content = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 18px;
    }
    .desc {
      font-size: 15px;
      color: gray;
    }
    .icons {
      margin-top: auto;
      text-align: right;
      margin-right: 10px;
      display: flex;
      justify-content: flex-end;
    }
    .icons div {
      margin-left: 5px;
    }
    .count {
      font-size: 17px;
    }
  `;
  return (
    <Element>
      <Thumb>
        <img src="public/thumb.jpg" />
      </Thumb>
      <Content>
        <div className="title">2021 봄, 자라나는 온라인 사역의 싹( 간사, CCC)</div>
        <div className="desc">2021.11.23 16:23</div>
        <div className="icons">
          <div>
            <IoChatbubbleOutline size="15px" />
            <span className="count">3</span>
          </div>
          <div>
            <IoHeartOutline size="15px" />
            <span className="count">4</span>
          </div>
        </div>
      </Content>
    </Element>
  );
}
export default Home;
