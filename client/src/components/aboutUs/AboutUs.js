import styled from "styled-components";
import { VscLinkExternal } from "react-icons/vsc";
import blue_polygon from "./image/blue_polygon.png";
import blue_polygon_lg from "./image/blue_polygon_lg.png";

const Wrapper = styled.section`
  margin: 0 auto;
  margin-top: 2.7rem;
  .paper_link {
    margin-top: 2.4rem;
    display: flex;
    justify-content: end;
  }
  position: relative;

  .blue_polygon {
    position: absolute;
    height: 60.2rem;
    left: 0;
    width: auto;
    z-index: -1;
  }

  .blue_polygon_lg {
    display: none;
  }

  .content {
    margin: 1.2rem;
  }

  @media screen and (min-width: 648px) {
    .blue_polygon {
      display: none;
    }
    .blue_polygon_lg {
      display: unset;
      position: relative;
      left: -690px;
      width: auto;
      height: 1225px;
      z-index: -1;
    }

    .content {
      margin-top: -120rem;
    }
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
    <Wrapper className="container">
      <img src={blue_polygon} alt="blue polygon" className="blue_polygon" />
      <img
        src={blue_polygon_lg}
        alt="blue polygon"
        className="blue_polygon_lg"
      />
      <div className="content">
        <h1>關於我們</h1>
        <div className="video_container">
          <iframe
            src="https://www.youtube.com/embed/JAYfLZ94avA"
            title="An introduction to OncoDNA Group (corporate video 2022)"
          ></iframe>
        </div>
        <div className="paper_link">
          <LinkButton>
            <h3>發表論文連結</h3>
            <VscLinkExternal />
          </LinkButton>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUs;
