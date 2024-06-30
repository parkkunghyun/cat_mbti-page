import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";

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
  background-color: skyblue;
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

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  // console.log(mbti);

  const [resultData, setResultData] = useState({});

  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);
  const btnClick = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Content>
        <Title>결과 보기!</Title>
        <LogoImage>
          <img
            width={350}
            height={350}
            src={resultData.image}
            alt="..."
            className="rounded-circle"
          />
        </LogoImage>
        <Desc>예비 집사님과 찰떡궁합인 고양이는 {resultData.name} 입니다!</Desc>
        <button onClick={btnClick} type="button" className="btn btn-primary">
          테스트 다시하기
        </button>
      </Content>
    </Wrapper>
  );
};

export default Result;
