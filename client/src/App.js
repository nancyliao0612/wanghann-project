import styled from "styled-components";
import "./App.css";
import Competitor from "./components/competitors/Competitor";
import GeneticTest from "./components/geneticTest/GeneticTest";
import OncoDNA from "./components/oncoDNA/OncoDNA";
import ProductFeat from "./components/productFeat/ProductFeat";
import ProductIntro from "./components/productIntro/ProductIntro";
// images
import cancer_cells from "./components/oncoDNA/images/cancer_cells.jpg";
// css
import "./App.css";

const Image = styled.div`
  background-image: url(${cancer_cells});
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  padding: 2.1rem 1.2rem;
  margin-top: 4rem;
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
`;

function App() {
  return (
    <>
      <div className="App">
        Wang Hann
        <ProductIntro />
        <GeneticTest />
        <Competitor />
        <ProductFeat />
      </div>
      <Image>
        <OncoDNA />
      </Image>
    </>
  );
}

export default App;
