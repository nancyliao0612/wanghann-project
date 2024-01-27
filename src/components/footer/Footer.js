import styled from "styled-components";
// images
import logo_oncoDNA_white from "./images/logo_oncoDNA_white.png";
import logo_wangHann_white from "./images/logo_wangHann_white.svg";

const Wrapper = styled.section`
  background: var(--color-primary);
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  gap: 1.2rem;

  h5 {
    color: var(--color-bg);
    font-weight: 300;
    span {
      text-decoration: underline;
    }
  }

  img {
    width: 6.2rem;
  }

  @media screen and (min-width: 648px) {
    padding: 1.2rem 2.4rem;
    img {
      width: 10.1rem;
    }
    h5 {
      font-size: 1.4rem;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .line {
    width: 0.5px;
    height: 1.6rem;
    background: var(--color-bg);
  }
`;

const TextContainer = styled.div`
  @media screen and (min-width: 648px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.4rem;

    br {
      display: none;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <img src={logo_oncoDNA_white} alt="logo_oncoDNA_white" />
        <div className="line"></div>
        <img src={logo_wangHann_white} alt="logo_oncoDNA_white" />
      </LogoContainer>
      <h5>
        汪翰精準生醫股份有限公司
        <br />
        臺北市松山區民生東路3段113巷7弄10號1樓
        <br />
        電話: 0932842828
      </h5>
      <TextContainer>
        <h5>
          法律聲明 <span>Legal Statement</span>
          ｜隱私聲明 <span>Privacy Policy</span>
        </h5>
        <h5>
          Copyright © {new Date().getFullYear()} Wanghann Precision Medicine
          Limited. All rights reserved
        </h5>
      </TextContainer>
    </Wrapper>
  );
};

export default Footer;
