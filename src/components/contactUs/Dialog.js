import styled from "styled-components";
import { HighlightText } from "../../utils";
import logo_oncoDNA_blue from "../navbar/images/Logo OncoDNA_Blue.png";

const Wrapper = styled.div`
  width: 100%;
  height: 20rem;
  padding: 2.4rem 1.2rem;
  background-color: var(--color-bg);
  border: 1px solid #e0e0e0;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  img {
    display: unset;
    margin-top: 1.6rem;
    width: 11rem;
    height: 4.6rem;
  }
`;

const Dialog = () => {
  return (
    <Wrapper>
      <h2>
        <HighlightText>已收到您的來信</HighlightText>
      </h2>
      <h4>我們將盡快回覆您</h4>
      <h4>感您對OncoDNA的支持</h4>
      <div>
        <img src={logo_oncoDNA_blue} alt="logo_oncoDNA_blue" />
      </div>
    </Wrapper>
  );
};

export default Dialog;
