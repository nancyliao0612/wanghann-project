import { useState } from "react";
import styled from "styled-components";
import { questionsArray } from "./utils";
import { BiChevronDown } from "react-icons/bi";

const Container = styled.div`
  margin: 1.2rem;
  padding: 1.2rem;
  border: solid 1px var(--color-grey);
  border-radius: 0.8rem;
  color: var(--color-primary);

  .expand {
    padding: 1.2rem;
    text-align: right;
    border-bottom: solid 1px var(--color-grey);
    color: var(--color-bright);
  }

  .grey_background {
    background: var(--color-light-grey);
  }

  div {
    border-bottom: solid 1px var(--color-grey);
    h4 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.2rem;
    }
    svg {
      font-size: 1.8rem;
    }
    .highlight {
      color: var(--color-bright);
    }
    .rotate {
      transform: rotate(180deg);
    }
  }
`;

const FAQ = () => {
  const [questionData, setQuestionData] = useState(questionsArray);
  const [openAll, setOpenAll] = useState(false);

  const toggle = (id) => {
    setQuestionData((prevState) => {
      return prevState.map((question) => {
        return question.id === id
          ? { ...question, open: !question.open }
          : question;
      });
    });
  };

  const toggleAll = () => {
    setQuestionData((prevState) => {
      return prevState.map((question) => {
        return { ...question, open: !question.open };
      });
    });
    setOpenAll((prevState) => !prevState);
  };

  const questionCard = questionData.map((data) => {
    const { id, open, answer, question } = data;
    return (
      <div className={open ? "grey_background" : null} key={id}>
        <h4 className={open ? "highlight" : null}>
          {question}
          <BiChevronDown
            onClick={() => toggle(id)}
            className={open && "rotate"}
          />
        </h4>
        {open && <h4>{answer}</h4>}
      </div>
    );
  });

  return (
    <section className="container">
      <Container>
        <h4 onClick={() => toggleAll()} className="expand">
          {openAll ? "全部展開" : "全部收起"}
        </h4>
        {questionCard}
      </Container>
    </section>
  );
};

export default FAQ;
