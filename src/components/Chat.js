import React from "react";
import styled from "styled-components";

function Chat() {
  const Root = styled.div``;
  const size = [1, 2]; //, 3, 4, 5, 6, 7, 8, 9, 10]; //, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const listData = size.map((i) => <Item />);
  return <Root>{listData}</Root>;
}
function Item() {
  const Element = styled.div`
    background-color: #ffffff;
    display: flex;
    border-bottom: 1px solid #cccccc;
    .thumb {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
    }
    .thumb img {
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
    .count {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
    }
    .count div {
      background-color: #ff7f00;
      color: #ffffff;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
    }
    .content .txt {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;
      overflow: hidden;
    }
    .title {
      display: flex;
    }
    .title .txt {
      font-size: 20px;
    }
    .title .date {
      margin-left: 10px;
      color: #ccc;
    }
  `;
  return (
    <Element>
      <div className="thumb">
        <img src="https://postfiles.pstatic.net/MjAyMDExMDFfMTgy/MDAxNjA0MjI4ODc1NDMw.Ex906Mv9nnPEZGCh4SREknadZvzMO8LyDzGOHMKPdwAg.ZAmE6pU5lhEdeOUsPdxg8-gOuZrq_ipJ5VhqaViubI4g.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%95%98%EB%8A%98%EC%83%89.jpg?type=w773" />
      </div>
      <div className="content">
        <div className="title">
          <div className="txt">대상자</div>
          <div className="date">2021.11.03</div>
        </div>
        <div className="txt">가나다라마바사아자차카타파하가나다라마바사아자차카타파하</div>
      </div>
      <div className="count">
        <div>99</div>
      </div>
    </Element>
  );
}
export default Chat;
