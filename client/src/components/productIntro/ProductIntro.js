import { productArray } from "./utils";
import styled from "styled-components";
// image
import gray_polygon_sm from "./images/gray_polygon_sm.svg";
import gray_polygon_lg from "./images/gray_polygon_lg.svg";
import blue_cell_sm from "./images/blue_cell_sm.png";
import blue_cell_lg from "./images/blue_cell_lg.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  margin: 1.2rem;

  @media screen and (min-width: 648px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: -2030px;
  }
`;

const Item = styled.div`
  width: 240px;
  border: solid 1px var(--color-grey);
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0px 8px 24px 0px #00000026;
  background-color: var(--color-bg);
  h2 {
    color: var(--color-bright);
  }

  img {
    padding: 20px 24px;
  }

  ul {
    margin-left: 1.4rem;
  }

  @media screen and (min-width: 648px) {
    width: 100%;
    h2 {
      font-size: 2rem;
    }
    p,
    h5,
    li {
      font-size: 1.6rem;
      line-height: 28px;
    }
    h5 {
      margin-top: 2.4rem;
    }
    img {
      padding: 3.6rem 1.2rem;
    }
  }
`;

const Title = styled.h2`
  color: var(--color-primary);
`;

// const GrayPolygon = styled.div`
//   background-image: url(${gray_polygon_sm});
//   position: absolute;
//   width: auto;
//   height: 467px;
//   left: -340px;
//   top: 430px;
//   z-index: -99;
// `;

const ProductIntro = () => {
  return (
    <>
      {/* <GrayPolygon></GrayPolygon> */}
      <img
        src={gray_polygon_sm}
        alt="gray_polygon_sm"
        className="gray_polygon_sm"
      />
      <img src={blue_cell_sm} alt="blue_cell_sm" className="blue_cell_sm" />
      <section className="container" id="productIntro">
        <h1 style={{ marginLeft: 12, marginRight: 12 }}>產品介紹</h1>
        <img
          src={gray_polygon_lg}
          alt="gray_polygon_lg"
          className="gray_polygon_lg"
        />
        <img src={blue_cell_lg} alt="blue_cell_lg" className="blue_cell_lg" />

        {/* 
        <div>
          <h1>產品介紹</h1>
          <img src={gray_polygon_sm} alt="" />
        </div> */}
        <Wrapper>
          {productArray.map(
            ({
              product,
              image,
              description,
              applyRange,
              sampleOrigin,
              biomarkers,
              genomicSignatures,
            }) => {
              return (
                <Item key={product}>
                  <Title>{product}</Title>
                  <img src={image} alt="OncoDEEP" />
                  <p>{description}</p>
                  <h5>適用範圍</h5>
                  <ul style={{ paddingLeft: 15 }}>
                    {applyRange.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <h5>樣本來源</h5>
                  <p>{sampleOrigin}</p>
                  <h5>Biomarkers</h5>
                  <p>{biomarkers}</p>
                  <h5>Genomic Signatures</h5>
                  <p>{genomicSignatures}</p>
                </Item>
              );
            }
          )}
        </Wrapper>
      </section>
    </>
  );
};

export default ProductIntro;
