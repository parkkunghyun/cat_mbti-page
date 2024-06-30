import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { QuestionData } from "../assets/data/questiondata";
import { useNavigate, createSearchParams } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  font-family: "SimKyungha";
`;

const Title = styled.div`
  font-size: 40px;
  text-align: center;
`;

const Question = () => {
  const navigate = useNavigate();
  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    setTotalScore(newScore);
    if (QuestionData.length !== questionNumber + 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      // 여기서 넘기기 전에 결과도 넘겨줘야함
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };

  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const [questionNumber, setQuestionNumber] = useState(0);
  return (
    <Wrapper>
      <ProgressBar
        className="progress"
        striped
        variant="danger"
        label={`${Math.floor((questionNumber / QuestionData.length) * 100)}%`}
        now={(questionNumber / QuestionData.length) * 100}
      />
      <Title>{QuestionData[questionNumber].title}</Title>
      <ButtonGroup className="btngroup" aria-label="Basic example">
        <button
          onClick={() =>
            handleClickButton(1, QuestionData[questionNumber].type)
          }
          style={{ width: "40%", minHeight: "200px", fontSize: "15px" }}
          type="button"
          className="btn btn-primary"
        >
          {QuestionData[questionNumber].answera}
        </button>
        <button
          onClick={() =>
            handleClickButton(0, QuestionData[questionNumber].type)
          }
          style={{ width: "40%", minHeight: "200px", fontSize: "15px" }}
          type="button"
          className="btn btn-success"
        >
          {QuestionData[questionNumber].answerb}
        </button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Question;
