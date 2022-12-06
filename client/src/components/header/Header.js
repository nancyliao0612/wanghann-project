import styled from "styled-components";
import { HighlightText } from "../../utils";
import carousel_one from "./images/carousel_one.png";
import large_carousel_one from "./images/large_carousel_one.png";
import hexagon from "../navbar/images/hexagon.svg";

const Carousel = styled.div`
  /* border: solid 1px green; */
  height: 500px;
  /* overflow: hidden; */

  .dissolve {
  }

  .items {
    height: 100%;
    position: relative;
    /* border: solid 1px orange; */
  }

  .items > img {
    background-image: url("./images/carousel_one.png");
    position: absolute;
    top: -180px;
    left: 0;
    /* border: solid 1px red; */
    z-index: -2;
    object-fit: none;

    @media screen and (min-width: 648px) {
      left: 0;
      top: 850px;
      width: auto;
    }
  }

  @media screen and (min-width: 648px) {
    height: 950px;
  }
`;

const Text = styled.div`
  padding: 0 1.2rem;
  margin: 0 auto;
  margin-top: -220px;

  h3 {
    color: var(--color-primary);
    margin: 1.2rem 0;
  }
  h4 {
    color: var(--color-bright-primary);
  }

  @media screen and (min-width: 648px) {
    max-width: var(--container-width-lg);
    padding: unset;
    margin-top: -300px;
    /* border: solid 1px red; */
  }
`;

const Wrapper = styled.section`
  /* overflow: hidden; */

  .large {
    display: none;
  }
  @media screen and (min-width: 648px) {
    .small {
      display: none;
    }
    .large {
      display: inherit;
      position: relative;
      top: -1020px;
      left: 40px;
    }
    .title {
      margin: 0 1.2rem;
      margin-top: -138rem;
    }
  }
`;

const Header = () => {
  return (
    <Wrapper className="container">
      <img src={hexagon} alt="hexagon" className="hexagon" />
      <Carousel className="small carousel dissolve">
        <div className="small items">
          <img className="small item" src={carousel_one} alt="" />
          {/* <img
          className="item"
          src={carousel_two}
          alt="Seven to ten at Leeds &amp; Holbeck"
        /> */}
        </div>
      </Carousel>
      <Carousel className="large carousel dissolve">
        <div className="large items">
          <img className="large item" src={large_carousel_one} alt="" />
          {/* <img
          className="item"
          src={carousel_two}
          alt="Seven to ten at Leeds &amp; Holbeck"
        /> */}
        </div>
      </Carousel>
      <div className="title">
        <Text>
          <h1>
            OncoDNA
            <br />
            <HighlightText>
              業界唯一深度腫瘤分析
              <br />
              控制病情、恢復正常生活
            </HighlightText>
          </h1>
          <h3>
            檢測腫瘤微環境內的DNA基因組、轉錄RNA和轉譯蛋白質，能更深度解析所面臨的敵手
          </h3>
          <h4>自2012年以來已幫助數千位病患</h4>
        </Text>
      </div>
    </Wrapper>
  );
};

export default Header;
