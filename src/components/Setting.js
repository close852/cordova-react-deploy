import React from "react";
import styled from "styled-components";
import { IoHappyOutline } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
function Setting() {
  const Root = styled.div``;
  const Profile = styled.div`
    background-color: #ffffff;
    height: 150px;
    display: flex;
    flex-direction: column;
    .my {
      display: flex;
      align-items: center;
      height: 80px;
      padding-left: 10px;
    }
    .title {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
    }
    .title .nick {
      font-size: 20px;
    }
    .title .desc {
      color: #aaaaaa;
    }
    .thumb {
      display: flex;
    }
    .thumb img {
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }
    .detailBtn {
      padding-left: 10px;
      padding-right: 10px;
      display: flex;
      justify-content: center;
    }
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #cccccc;
      width: 95%;
      height: 30px;
      border-radius: 5px;
    }
  `;
  const ListPane = styled.div`
    margin-top: 10px;
    background-color: #ffffff;
  `;
  return (
    <Root>
      <Profile>
        <div className="my">
          <div className="thumb">
            <img src="https://postfiles.pstatic.net/MjAyMDExMDFfMTgy/MDAxNjA0MjI4ODc1NDMw.Ex906Mv9nnPEZGCh4SREknadZvzMO8LyDzGOHMKPdwAg.ZAmE6pU5lhEdeOUsPdxg8-gOuZrq_ipJ5VhqaViubI4g.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%95%98%EB%8A%98%EC%83%89.jpg?type=w773" />
          </div>
          <div className="title">
            <div className="nick">아뱅밀알</div>
            <div className="desc">송파동 #123123</div>
          </div>
        </div>
        <div className="detailBtn">
          <div className="btn">프로필 보기</div>
        </div>
      </Profile>
      <ListPane>
        <Item svg={<IoHappyOutline size="25px" />} title="텍스트" link="" />
        <Item svg={<IoHappyOutline size="25px" />} title="텍스트" link="" />
        <Item svg={<IoHappyOutline size="25px" />} title="텍스트" link="" />
        <Item svg={<IoHappyOutline size="25px" />} title="텍스트" link="" />
      </ListPane>
      <ListPane>
        <Item svg={<IoHappyOutline size="25px" />} title="텍스트" link="" />
        <Item svg={<IoHappyOutline size="25px" />} title="텍스트" link="" />
        <Item svg={<IoHappyOutline size="25px" />} title="텍스트" link="" />
        <Item svg={<IoHappyOutline size="25px" />} title="텍스트" link="" />
      </ListPane>
    </Root>
  );
}

function Item({ svg, title, link }) {
  const Element = styled.div`
    display: flex;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
    }
    .title {
      display: flex;
      align-items: center;
      font-size: 20px;
    }
    .title a {
      text-decoration: none;
      color: inherit;
    }
  `;
  return (
    <Element>
      <div className="icon">{svg}</div>
      <div className="title">
        <Link to={link}>{title}</Link>
      </div>
    </Element>
  );
}

export default Setting;
