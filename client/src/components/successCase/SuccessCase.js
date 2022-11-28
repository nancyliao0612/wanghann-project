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
  padding: 2.8rem 1.2rem;
  background: var(--color-light-grey);

  .video_container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
  }

  .video_container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

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
          {caseArray.map((item, index) => {
            const { video, title, description } = item;
            return (
              <>
                <SwiperSlide key={index}>
                  <div className="video_container">
                    <iframe src={video}></iframe>
                  </div>
                  <div>
                    <h2 style={{ margin: "1.2rem 0" }}>{title}</h2>
                    <h4>{description}</h4>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
          <div className="custom-pagination-div"></div>
        </Swiper>
      ) : (
        <Container>
          {caseArray.map((item, index) => {
            const { video, title, description } = item;
            return (
              <div id="case" key={index}>
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
