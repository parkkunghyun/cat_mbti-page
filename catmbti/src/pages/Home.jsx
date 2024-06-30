import React from "react";
import styled from "styled-components";
// css - in - js
import PangImage from "../assets/ggompang.jpeg";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  font-family: "SimKyungha";
`;

const Header = styled.div`
  font-size: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const Content = styled.div`
  display: flex;
  padding: 10px;
  background-color: pink;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 32px;
  margin-top: 20px;
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Home = () => {
  const navigate = useNavigate();
  const TestBtnClick = () => {
    // useHistory
    navigate("/question");
  };
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Content>
        <Title>나에게 맞는 집사님은?</Title>
        <LogoImage>
          <img
            width={350}
            height={350}
            src={PangImage}
            alt="..."
            className="rounded-circle"
          />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 가장 잘 맞는 고양이 찾기!</Desc>
        <button
          onClick={TestBtnClick}
          type="button"
          className="btn btn-primary"
        >
          테스트 시작하기
        </button>
      </Content>
    </Wrapper>
  );
};

export default Home;
