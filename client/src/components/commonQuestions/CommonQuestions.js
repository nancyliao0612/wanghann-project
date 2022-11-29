import { quesitonsArray } from "./utils";
import { HighlightText } from "../../utils";
// react icon
import { BiChevronUp } from "react-icons/bi";
import styled from "styled-components";
import { useState } from "react";

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
    }
  }

  @media screen and (min-width: 648px) {
    max-width: 600px;
  }
`;

const Card = styled.div`
  border-bottom: solid 1px var(--color-grey);
  background: var(--color-light-grey);
  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem;
  }
  svg {
    cursor: pointer;
    color: var(--color-bright);
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
    li {
      font-size: 1.6rem;
      line-height: 2.8rem;
    }
  }
`;

const CommonQuestions = () => {
  const [openInfo, setOpenInfo] = useState(true);
  const [questionId, setQuestionId] = useState(0);

  const handleClick = (id) => {
    setOpenInfo(!openInfo);
    setQuestionId(id);
  };

  return (
    <Container id="commonQuestions" className="container">
      <h1>常見問題</h1>
      <Wrapper>
        {quesitonsArray.map(({ id, question, answer }) => {
          return (
            <Card key={id}>
              <h2>
                <HighlightText>{question}</HighlightText>
                <BiChevronUp
                  onClick={() => handleClick(id)}
                  className={!openInfo && "rotate"}
                />
              </h2>
              <h4
                style={{
                  display: questionId === id && !openInfo ? "none" : null,
                }}
              >
                {answer}
              </h4>
            </Card>
          );
        })}
        <h3>閱讀更多</h3>
      </Wrapper>
    </Container>
  );
};

export default CommonQuestions;
