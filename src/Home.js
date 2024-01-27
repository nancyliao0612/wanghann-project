import styled from "styled-components";
// components
import Competitor from "./components/competitors/Competitor";
import GeneticTest from "./components/geneticTest/GeneticTest";
import OncoDNA from "./components/oncoDNA/OncoDNA";
import ProductFeat from "./components/productFeat/ProductFeat";
import ProductIntro from "./components/productIntro/ProductIntro";
import CommonQuestions from "./components/commonQuestions/CommonQuestions";
import Header from "./components/header/Header";
import SuccessCase from "./components/successCase/SuccessCase";
import AboutUs from "./components/aboutUs/AboutUs";
import ContactUs from "./components/contactUs/ContactUs";
// images
import cancer_cells from "./components/oncoDNA/images/cancer_cells.jpg";
// css
import "./App.css";

const Image = styled.div`
  background-image: url(${cancer_cells});
  width: 100%;
  height: 560px;
  background-size: cover;
  background-position: center;
  padding: 2.1rem 2.4rem;
  background-color: rgba(89, 39, 81, 0.5);

  h2 {
    margin-bottom: 1.6rem;
  }
  h2,
  h4 {
    padding: 0 1.2rem;
  }

  .container {
    margin-top: 0;
  }

  @media screen and (min-width: 648px) {
    height: 100vh;
  }
`;

function Home() {
  return (
    <>
      <Header />
      <ProductIntro />
      <GeneticTest />
      <div className="App">
        <Competitor />
      </div>
      <ProductFeat />
      <div className="cell_image">
        <Image>
          <OncoDNA />
        </Image>
      </div>
      <SuccessCase />
      <AboutUs />
      <div className="App">
        <CommonQuestions />
        <ContactUs />
      </div>
    </>
  );
}
export default Home;
