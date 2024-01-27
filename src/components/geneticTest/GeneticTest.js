// images
import { BiTargetLock, BiDna } from "react-icons/bi";
import comprehensive from "./images/comprehensive.svg";
import leading from "./images/leading.svg";
import styled from "styled-components";
import grey_polygon from "./images/grey_polygon.png";
import orange_polygon from "./images/orange_polygon.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin: 1.2rem;

  @media screen and (min-width: 414px) {
    .up_container,
    .down_container {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
  @media screen and (min-width: 648px) {
    flex-direction: row;
    gap: 0px;

    .up_container,
    .down_container {
      width: 50%;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  &.left {
    transform: translateX(-48px);
    .icon svg {
      width: 45px;
      height: 45px;
    }
  }
  &.right {
    transform: translateX(48px);
    margin-top: 12px;
  }
  .icon {
    position: relative;
    svg {
      position: absolute;
      left: 50%;
      top: 50%;
      color: var(--color-bright);
      width: 40px;
      height: 40px;
      transform: translate(-50%, -50%);
    }
  }

  img {
    width: 96px;
  }

  @media screen and (min-width: 414px) {
    width: 50%;
    img {
      margin: 0px 105px;
    }
    &.left {
      transform: none;
      margin-bottom: 56px;
      svg {
        width: 45px;
        height: 45px;
      }
    }
    &.right {
      transform: none;
      margin-top: 56px;
    }
  }
  @media screen and (min-width: 648px) {
    min-width: 180px;
    width: 50%;
  }
`;

const GeneticTestWrapper = styled.div`
  position: relative;

  .polygon {
    position: absolute;
    width: auto;
    height: 52.7rem;
    left: 0;
    top: 10rem;

    @media screen and (min-width: 648px) {
      display: none;
    }
  }

  h1 {
    margin-right: 1.2rem;
    margin-left: 1.2rem;
  }
`;

const GeneticTest = () => {
  return (
    <GeneticTestWrapper className="container">
      <img src={grey_polygon} alt="grey polygon" className="polygon" />
      <h1>新一代癌症用藥基因檢測</h1>
      <Wrapper>
        <div className="up_container">
          <IconContainer className="left">
            <div className="icon">
              <img src={orange_polygon} alt="orange_polygon" />
              <BiTargetLock />
            </div>
            <h2>更準</h2>
            <h3>主攻腫瘤微環境解析</h3>
          </IconContainer>
          <IconContainer className="right">
            <div className="icon">
              <img src={orange_polygon} alt="orange_polygon" />
              <BiDna />
            </div>
            <h2>更多</h2>
            <h3>業界最多638個基因檢測</h3>
          </IconContainer>
        </div>
        <div className="down_container">
          <IconContainer className="left">
            <img src={comprehensive} alt="precise icon" />
            <h2>更全面</h2>
            <h3>檢測範圍涵蓋RNA與蛋白質</h3>
          </IconContainer>
          <IconContainer className="right">
            <img src={leading} alt="more icon" />
            <h2>更領先</h2>
            <h3>每日更新的全球資料庫</h3>
          </IconContainer>
        </div>
      </Wrapper>
    </GeneticTestWrapper>
  );
};

export default GeneticTest;
