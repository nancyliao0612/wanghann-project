import styled from "styled-components";
// swiper
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// util
import { caseArray } from "./util.js";
import { useEffect, useState } from "react";

const Wrapper = styled.section`
  margin: 0 auto;
  padding: 2.8rem 2.4rem;
  background: var(--color-light-grey);

  /* .large_container {
    display: none;
  } */

  @media screen and (min-width: 648px) {
    padding: 4.1rem 1.2rem;

    /* .large_container {
      display: unset;
    }
    .swiper_container {
      display: none;
    } */
    h1 {
      margin: 0 auto;
      max-width: var(--container-width-lg);
    }
  }
`;

const Container = styled.div`
  max-width: var(--container-width-lg);
  display: flex;
  gap: 4.8rem;
  margin: 0 auto;
  margin-top: 3.6rem;

  #case {
    flex: 1;
  }
`;

const SuccessCase = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <Wrapper>
      <h1>成功案例</h1>
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
        >
          {caseArray.map((item) => {
            const { id, video, title, description } = item;
            return (
              <SwiperSlide key={id}>
                <div className="video_container">
                  <iframe src={video}></iframe>
                </div>
                <div>
                  <h2 style={{ margin: "1.2rem 0" }}>{title}</h2>
                  <h4>{description}</h4>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="custom-pagination-div"></div>
        </Swiper>
      ) : (
        <Container>
          {caseArray.map((item) => {
            const { id, video, title, description } = item;
            return (
              <div id="case" key={id}>
                <div className="video_container">
                  <iframe src={video}></iframe>
                </div>
                <div>
                  <h2 style={{ margin: "1.2rem 0" }}>{title}</h2>
                  <h4>{description}</h4>
                </div>
              </div>
            );
          })}
        </Container>
      )}
    </Wrapper>
  );
};

export default SuccessCase;
