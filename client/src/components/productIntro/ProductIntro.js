import { productArray } from "./utils";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  @media screen and (min-width: 414px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Item = styled.div`
  width: 240px;
  border: solid 1px var(--color-grey);
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0px 8px 24px 0px #00000026;
  h2 {
    color: var(--color-bright);
  }

  img {
    padding: 20px 24px;
  }

  ul {
    margin-left: 1.4rem;
  }

  @media screen and (min-width: 414px) {
    /* border: solid 1px red; */
    width: 30%;
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
      padding: 36px 24px;
    }
  }
`;

const Title = styled.h2`
  color: var(--color-primary);
`;

const ProductIntro = () => {
  return (
    <section className="container">
      <h1>產品介紹</h1>

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
              <Item>
                <Title>{product}</Title>
                <img src={image} alt="OncoDEEP" />
                <p>{description}</p>
                <h5>適用範圍</h5>
                <ul style={{ paddingLeft: 15 }}>
                  {applyRange.map((item) => (
                    <li>{item}</li>
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
  );
};

export default ProductIntro;
