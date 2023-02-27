import styled, { keyframes } from "styled-components";
import { HighlightText } from "../../utils";
import carousel_one from "./images/carousel_one.png";
import carousel_two from "./images/carousel_two.png";
import carousel_three from "./images/carousel_three.png";
import carousel_four from "./images/carousel_four.png";
import carousel_five from "./images/carousel_five.png";
import large_carousel_one from "./images/large_carousel_one.png";
import large_carousel_two from "./images/large_carousel_two.png";
import large_carousel_three from "./images/large_carousel_three.png";
import large_carousel_four from "./images/large_carousel_four.png";
import large_carousel_five from "./images/large_carousel_five.png";
import hexagon from "../navbar/images/hexagon.svg";

const dissolve = keyframes`
0%, 30%, 100% {opacity: 0}
5%, 25% {opacity: 1};
`;

const Carousel = styled.div`
  /* border: solid 1px green; */
  height: 515px;
  /* overflow: hidden; */

  .dissolve {
    position: relative;
  }

  .items {
    height: 100%;
    position: relative;
    /* border: solid 1px orange; */
  }

  .item {
    position: absolute;
    left: 0;
    right: 0;
    opacity: 0;
    animation: ${dissolve} 20s linear infinite;

    &:nth-child(2) {
      animation-delay: 4s;
    }
    &:nth-child(3) {
      animation-delay: 8s;
    }
    &:nth-child(4) {
      animation-delay: 12s;
    }
    &:nth-child(5) {
      animation-delay: 16s;
    }
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
    height: 1050px;
  }
`;

const Text = styled.div`
  padding: 0 1.2rem;
  margin: 0 auto;
  margin-top: -220px;

  h1 {
    margin-bottom: unset;
  }
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
      top: -1080px;
      left: 5px;
    }
    .title {
      margin: 0 1.2rem;
      margin-top: -150rem;
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
          <img className="small item" src={carousel_two} alt="" />
          <img className="small item" src={carousel_three} alt="" />
          <img className="small item" src={carousel_four} alt="" />
          <img className="small item" src={carousel_five} alt="" />
        </div>
      </Carousel>
      <Carousel className="large carousel dissolve">
        <div className="large items">
          <img className="large item" src={large_carousel_one} alt="" />
          <img className="large item" src={large_carousel_two} alt="" />
          <img className="large item" src={large_carousel_three} alt="" />
          <img className="large item" src={large_carousel_four} alt="" />
          <img className="large item" src={large_carousel_five} alt="" />
        </div>
      </Carousel>
      <div className="title">
        <Text>
          <h1>
            OncoDNA
            <br />
            <HighlightText>業界唯一深度腫瘤分析</HighlightText>
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
