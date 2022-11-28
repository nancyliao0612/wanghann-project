import styled from "styled-components";
import { VscLinkExternal } from "react-icons/vsc";

const Wrapper = styled.section`
  margin: 0 auto;
  margin-top: 2.7rem;
  div:last-child {
    margin-top: 2.4rem;
    display: flex;
    justify-content: end;
  }
`;

const LinkButton = styled.button`
  border: solid 1px var(--color-bright);
  border-radius: 0.4rem;
  padding: 8px 12px;
  color: var(--color-bright);
  background: var(--color-bg);
  display: flex;
  align-items: center;

  h3 {
    width: 12rem;
  }
  svg {
    font-size: 1.6rem;
  }

  @media screen and (min-width: 648px) {
    padding: 10px 12px;

    h3 {
      width: 18rem;
    }
    h3,
    svg {
      font-size: 1.8rem;
    }
  }
`;

const AboutUs = () => {
  return (
    <Wrapper>
      <h1>關於我們</h1>
      <div className="video_container">
        <iframe src="https://www.youtube.com/embed/JAYfLZ94avA"></iframe>
      </div>
      <div>
        <LinkButton>
          <h3>發表論文連結</h3>
          <VscLinkExternal />
        </LinkButton>
      </div>
    </Wrapper>
  );
};

export default AboutUs;
