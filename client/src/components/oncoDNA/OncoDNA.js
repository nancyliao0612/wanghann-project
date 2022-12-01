// swiper
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// images
import styled from "styled-components";
// util
import { tumorArray } from "./utils";
import { useEffect, useState } from "react";

const Title = styled.h2`
  color: var(--color-primary);
  margin-top: 1.2rem;
`;
const TextContainer = styled.div`
  h1,
  h2,
  h4 {
    color: var(--color-white);
  }
`;

const Description = styled.h4`
  margin-bottom: 2.4rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.6rem;
  margin-top: 6.7rem;

  div:nth-child(2) {
    flex-direction: row-reverse;
    img {
      border-radius: 0 2.4rem 2.4rem 0;
    }
  }
`;

const Container = styled.div`
  display: flex;
  border: solid 1px var(--color-grey);
  background: var(--color-white);
  border-radius: 2.4rem;

  .image {
    flex: 2;
  }
  img {
    border-radius: 2.4rem 0 0 2.4rem;
  }
  .info {
    flex: 3;
    padding: 3.6rem 2.4rem;
  }
  h4 {
    margin-bottom: unset;
  }
  h2 {
    margin-top: unset;
  }
`;

const OncoDNA = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <section className="container">
      <TextContainer>
        <h1>OncoDNA 新一代癌症用藥基因檢測</h1>
        <h2>惡性腫瘤是個難纏的敵手</h2>
        <h4>它狡猾無比，可以躲過免疫軍隊的偵查；</h4>
        <h4>它冷血無情，四處攻城掠地，霸佔所有資源；</h4>
        <h4>它變換多端，能因應局勢找出逃跑的路徑。</h4>
      </TextContainer>

      {windowWidth < 648 ? (
        <Swiper
          pagination={{
            el: ".custom-pagination-div",
            clickable: true,
            renderBullet: (index, className) => {
              return '<span class="' + className + '">' + "</span>";
            },
          }}
          modules={[Pagination]}
          className="oncoDNA_swiper"
        >
          {tumorArray.map((item) => {
            const { id, image, title, description } = item;
            return (
              <SwiperSlide key={id} id="oncoDNA">
                <div className="image">
                  <img src={image} />
                </div>
                <div>
                  <Title>{title}</Title>
                  <Description>{description}</Description>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="custom-pagination-div"></div>
        </Swiper>
      ) : (
        <Wrapper>
          {tumorArray.map((item) => {
            const { id, image, title, description } = item;

            return (
              <Container key={id}>
                <div className="image">
                  <img src={image} />
                </div>
                <div className="info">
                  <Title>{title}</Title>
                  <Description>{description}</Description>
                </div>
              </Container>
            );
          })}
        </Wrapper>
      )}
    </section>
  );
};

export default OncoDNA;
