import circle_27 from "./images/circle_27.svg";
import circle_92 from "./images/circle_92.svg";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { HighlightText } from "../../utils";
// image
import grey_polygon from "./images/grey_polygon.png";

const ProductFeatWrapper = styled.section`
  padding: 1.2rem;
  @media screen and (min-width: 648px) {
    margin-top: -172rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 648px) {
    flex-direction: row-reverse;
    align-items: center;

    h4 {
      flex: 5;
    }
  }
`;

const Container = styled.div`
  display: flex;
  padding: 2.4rem;
  width: 100%;
  flex: 1;

  @media screen and (min-width: 648px) {
    flex: 1;
    padding: 0 2rem;
  }
`;

const ChartContainer = styled.div`
  position: relative;
  width: max-content;

  p {
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.4rem;
  }
  span {
    font-size: 1.4rem;
  }
`;

const GeneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  gap: 0.6rem;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: end;

  svg {
    font-size: 3rem;
  }

  gap: 3.2rem;
  flex: 1;
`;

const RightContainer = styled.div`
  width: 50%;
  align-items: left;
`;

const Test = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  gap: 0.8rem;
`;

const ProductFeat = () => {
  return (
    <>
      <ProductFeatWrapper className="container">
        <img
          src={grey_polygon}
          alt="grey_polygon"
          className="grey_polygon_lg_2"
        />
        <img
          src={grey_polygon}
          alt="grey_polygon"
          className="grey_polygon_lg_3"
        />
        <h1 style={{ margin: 0 }}>產品特色</h1>
        <h2 style={{ margin: "3.6rem 0" }}>
          同步分析基因+RNA+蛋白質，提升整體治療選項獲益率
        </h2>
        <Wrapper>
          <Container>
            <LeftContainer>
              <GeneContainer>
                <ChartContainer>
                  <img src={circle_27} />
                  <p>
                    27
                    <span>%</span>
                  </p>
                </ChartContainer>
                <h4>基因分析</h4>
              </GeneContainer>
              <BsArrowRight />
            </LeftContainer>
            <RightContainer>
              <Test>
                <ChartContainer>
                  <img src={circle_92} />
                  <p>
                    92
                    <span>%</span>
                  </p>
                </ChartContainer>
                <h4>
                  基因+<HighlightText>RNA+蛋白質分析</HighlightText>
                </h4>
              </Test>
            </RightContainer>
          </Container>
          <h4>
            研究數據顯示，癌症病患根據腫瘤基因突變的檢測結果，僅有
            <HighlightText>27%</HighlightText>
            的病患能獲得相對應的癌症治療選項。若加上
            <HighlightText>腫瘤蛋白質</HighlightText>
            變異的分析，則整體治療選項獲益率將提升至
            <HighlightText>92％</HighlightText>
            。因此，同步分析腫瘤基因與蛋白質的變異，能更全方位地解讀腫瘤弱點，提供最完整的醫藥資訊分析，協助醫師選擇最合適的治療選項。
          </h4>
        </Wrapper>
      </ProductFeatWrapper>
    </>
  );
};

export default ProductFeat;
