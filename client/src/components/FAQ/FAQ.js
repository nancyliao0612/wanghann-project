import { useState } from "react";
import styled from "styled-components";
import { questionsArray } from "./utils";
import { BiChevronDown } from "react-icons/bi";
// image
import banner from "./images/banner.png";
import small_banner from "./images/small_banner.png";
import polygon from "./images/polygon.png";

const Container = styled.div`
  margin: 1.2rem;
  margin-top: 25rem;
  margin-bottom: 5rem;
  padding: 1.2rem;
  border: solid 1px var(--color-grey);
  border-radius: 0.8rem;
  background: var(--color-bg);
  color: var(--color-primary);

  @media screen and (min-width: 648px) {
    margin-top: 30rem;
    margin-bottom: 12rem;
    padding: 2.4rem;
  }

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

const Image = styled.div`
  .large,
  .polygon {
    display: none;
  }

  .small {
    z-index: -1;
    position: absolute;
    height: 516px;
    top: 0;
    right: 0;
  }

  @media screen and (min-width: 648px) {
    height: 0;
    img {
      object-fit: none;
      position: absolute;
    }
    .polygon {
      display: inherit;
      position: relative;
      bottom: 910px;
      left: -800px;
      z-index: -1;
      height: 1050px;
    }

    .banner {
      top: 0;
      right: 0;
      z-index: -99;
      overflow: hidden;
    }

    .small {
      display: none;
    }
    .large {
      height: 860px;
      display: inherit;
    }
  }
`;

const Heading = styled.h1`
  color: var(--color-bg);
  position: relative;
  top: 180px;
  left: 12px;
  @media screen and (min-width: 648px) {
    position: relative;
    top: 200px;
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
      <div className={open ? "grey_background" : undefined} key={id}>
        <h4 className={open ? "highlight" : undefined}>
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
    <>
      <section className="container">
        <Image>
          <img src={polygon} alt="polygon" className="hidden polygon" />
          <img src={banner} alt="banner" className="large banner" />
          <img src={small_banner} alt="banner" className="small banner" />
        </Image>
        <Heading>常見問題</Heading>
        <Container>
          <h4 onClick={() => toggleAll()} className="expand">
            {openAll ? "全部收起" : "全部展開"}
          </h4>
          {questionCard}
        </Container>
      </section>
    </>
  );
};

export default FAQ;
