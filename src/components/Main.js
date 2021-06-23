import React from "react";
import styled from "styled-components";
import { IoCheckmarkCircleOutline, IoChatbubbleOutline } from "react-icons/io5";

function Main() {
  let size = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  const listData = size.map((item) => <Item />);

  return <>{listData} </>;
}

function Item() {
  const Root = styled.div`
    margin-bottom: 10px;
  `;
  const Element = styled.div`
    padding: 10px;
    background-color: #ffffff;
    .content {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-all;
      overflow: hidden;
    }
    .desc {
      font-size: 15px;
      color: gray;
      display: flex;
    }
    .desc div:last-child {
      margin-left: auto;
    }
    .gbn {
      margin-bottom: 10px;
    }
    .gbn div {
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 25px;
    }
  `;
  const BtnArea = styled.div`
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border-top: 1px solid #cccccc;
    height: 40px;
    div {
      width: 100px;
      display: flex;
      align-items: center;
    }
    div svg {
      margin-right: 5px;
    }
  `;

  return (
    <Root>
      <Element>
        <div className="gbn">
          <div>같이해요</div>
        </div>
        <div className="content">가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하</div>
        <div className="desc">
          <div>최지우*송파동</div>
          <div>1시간 전</div>
        </div>
      </Element>
      <BtnArea>
        <div>
          <IoCheckmarkCircleOutline size="20px" />
          궁금해요
        </div>
        <div>
          <IoChatbubbleOutline size="20px" />
          댓글쓰기
        </div>
      </BtnArea>
    </Root>
  );
}
export default Main;
