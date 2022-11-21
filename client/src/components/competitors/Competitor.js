import styled from "styled-components";
import { ReactComponent as Crown } from "./images/crown.svg";

const Table = styled.table`
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  margin: 2.4rem 0;

  span {
    font-size: 0.8rem;
  }

  svg {
    position: absolute;
    right: 2.4rem;
    width: 1.2rem;
    height: 1.2rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  tr {
    height: 4.4rem;
  }
  tr:first-child {
    height: 5.3rem;
  }

  tr:nth-child(even) {
    background: var(--color-light-grey);
  }
  td {
    width: calc(100% / 3);
  }
  tr > td:nth-of-type(1) {
    color: var(--color-primary);
  }
  tr > td:nth-of-type(2) {
    position: relative;
    color: var(--color-bright-primary);
    border-left: solid 1px var(--color-bright-primary);
    border-right: solid 1px var(--color-bright-primary);
  }
  tr:last-child > td:nth-child(2) {
    border-bottom: solid 1px var(--color-bright-primary);
  }
  tr > th:nth-child(2) {
    height: 5.3rem;
    color: var(--color-white);
    background: var(--color-bright-primary);
    border-radius: 8px 8px 0 0;
  }

  @media screen and (min-width: 648px) {
    font-size: 2rem;

    p {
      font-size: 2rem;
    }
    span {
      font-size: 1rem;
    }
    tr {
      height: 6.1rem;
    }
    tr > th:nth-child(2) {
      height: 7.2rem;
    }
    svg {
      position: absolute;
      right: 5.6rem;
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const Competitor = () => {
  return (
    <section className="container">
      <h1>安可深 V.S. 他牌</h1>
      <Table>
        <tr>
          <th></th>
          <th>
            <div>
              <p>安可深</p>
              <span>(OncoDEEP)</span>
            </div>
          </th>
          <th>他牌</th>
        </tr>
        <tr>
          <td>檢測樣本</td>
          <td>腫瘤組織 </td>
          <td>血液</td>
        </tr>
        <tr>
          <td>腫瘤訊息度</td>
          <td>
            高<Crown />
          </td>
          <td>低</td>
        </tr>
        <tr>
          <td>檢測基因數</td>
          <td>
            638
            <Crown />
          </td>
          <td>5~350</td>
        </tr>
        <tr>
          <td>檢測轉錄RNA</td>
          <td>
            20
            <Crown />
          </td>
          <td>無</td>
        </tr>
        <tr>
          <td>檢測特異性蛋白</td>
          <td>
            有<Crown />
          </td>
          <td>無</td>
        </tr>
      </Table>
      <h3>
        癌症用藥主要目的是殺死腫瘤細胞，安可深所檢測的腫瘤組織中，含有高量的腫瘤細胞，又是業界唯一檢測638個基因和RNA與蛋白質的產品，因此能對腫瘤細胞提供更全面的弱點分析。
      </h3>
    </section>
  );
};

export default Competitor;
