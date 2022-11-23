// swiper
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// images
import DNA_mutation from "./images/DNA_mutation.jpg";
import t_cell from "./images/t_cell.jpg";
import stained_tumor from "./images/stained_tumor.jpg";
import styled from "styled-components";
// util
import { HighlightText } from "../../utils";

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

const OncoDNA = () => {
  return (
    <section className="container">
      <TextContainer>
        <h1>OncoDNA 新一代癌症用藥基因檢測</h1>
        <h2>惡性腫瘤是個難纏的敵手</h2>
        <h4>它狡猾無比，可以躲過免疫軍隊的偵查；</h4>
        <h4>它冷血無情，四處攻城掠地，霸佔所有資源；</h4>
        <h4>它變換多端，能因應局勢找出逃跑的路徑。</h4>
      </TextContainer>
      <Swiper pagination={true} modules={[Pagination]}>
        <SwiperSlide>
          <img src={DNA_mutation} />
          <Title>為什麼它那麼難纏?</Title>
          <h4>
            惡性腫瘤是一群快速增生的細胞，也因為增生太快而導致其基因組的不穩定，
            可能產生特異的基因突變，可能是不同型態的突變，也造成某些蛋白質產生變異，也可能多種突變同時發生或是有不同的變異排列組合，因為它想透過不斷
            的變化找出存活之路，這就造成每個人的腫瘤基因組都不盡相同。
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={t_cell} />
          <Title>腫瘤城市</Title>
          <h4>
            腫瘤微環境(Tumor
            Microenvironment)可以視為一個功能完善的城市，裡面有很多居民(細胞和組織)，有的負責增生(癌細胞)，有些負責運送養分物資(新生血管)，有的透過宣傳去影響隔壁城市(各式外泌性蛋白)，所以如果你要打贏這場仗，是不是要更了解這個城市(腫瘤微環境)如何運作呢?
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={stained_tumor} />
          <Title>
            <HighlightText>安可深</HighlightText>
            透過檢測「腫瘤組織微環境」中的狀況，提供更深度的敵情分析
          </Title>
          <h4>
            目前癌症治療前，需透過「組織」病理切片診斷後才能確認疾病名稱與分級，臨床醫師再根據組織病理診斷結果提供治療方案，因此組織病理也是診斷的黃金標準(Gold
            Standard)。安可深(OncoDEEP)即是檢測組織腫瘤微環境，依照診斷的黃金標準掃描
            <HighlightText>
              638個基因(DNA)、20個轉錄RNA組合與不同腫瘤的特異蛋白表現組
            </HighlightText>
            提供更深度的敵情分析報告讓臨床醫師更了解所面對的敵手，進而提供更適切、更精準的治療方案。
          </h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default OncoDNA;
