import { quesitonsArray } from "./utils";
import { HighlightText } from "../../utils";
// react icon
import { BiChevronUp } from "react-icons/bi";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.section`
  @media screen and (min-width: 648px) {
    display: flex;
    gap: 3.6rem;
    h1 {
      width: 26.5rem;
    }
  }
`;

const Wrapper = styled.div`
  border-radius: 0.8rem;
  padding: 1.2rem;
  border: solid 1px var(--color-grey);
  background-color: var(--color-white);

  h3 {
    border: solid 1px var(--color-bright);
    width: 100%;
    padding: 8px 12px;
    margin-top: 1.2rem;
    color: var(--color-bright);
    background: var(--color-bg);
    text-align: center;
    border-radius: 4px;
    cursor: pointer;

    @media screen and (min-width: 648px) {
      font-size: 1.8rem;
      padding: 10px 12px;
      margin-top: 2.4rem;
    }
  }

  @media screen and (min-width: 648px) {
    max-width: 600px;
    width: 100%;
    z-index: 99;
    padding: 2.4rem;
  }
`;

const Card = styled.div`
  border-bottom: solid 1px var(--color-grey);
  background: ${(props) => (props.isOpen ? "#f5f5f5" : "white")};

  p {
    color: ${(props) => (props.isOpen ? "#ff7355" : "#0f4b70")};
    font-size: 1.6rem;
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem;
  }
  svg {
    cursor: pointer;
    color: ${(props) => (props.isOpen ? "#ff7355" : "#0f4b70")};
    width: 2.4rem;
    height: 2.4rem;
  }
  .rotate {
    transform: rotate(180deg);
  }
  h4 {
    padding: 0 1.2rem;
    padding-bottom: 2.4rem;
    color: var(--color-primary);
  }
  @media screen and (min-width: 648px) {
    p {
      font-size: 1.8rem;
    }
    li {
      font-size: 1.6rem;
      line-height: 2.8rem;
    }
  }
`;

const CommonQuestions = () => {
  const [data, setData] = useState(quesitonsArray);
  const navigate = useNavigate();

  const handleClick = (id) => {
    setData((prevState) => {
      return prevState.map((question) => {
        return question.id === id
          ? { ...question, isOpen: !question.isOpen }
          : question;
      });
    });
  };

  const newData = data.map((datum) => {
    const { id, question, answer, isOpen } = datum;
    return (
      <Card key={id} isOpen={isOpen}>
        <h2>
          <p>{question}</p>
          <BiChevronUp
            onClick={() => handleClick(id)}
            className={!isOpen && "rotate"}
          />
        </h2>
        {isOpen && <h4 onClick={() => console.log("hi")}>{answer}</h4>}
      </Card>
    );
  });

  return (
    <Container id="commonQuestions" className="container">
      <h1>常見問題</h1>
      <Wrapper>
        {newData}
        <h3 onClick={() => navigate("/FAQ")}>閱讀更多</h3>
      </Wrapper>
    </Container>
  );
};

export default CommonQuestions;
