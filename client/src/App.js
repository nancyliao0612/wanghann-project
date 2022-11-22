import "./App.css";
import Competitor from "./components/competitors/Competitor";
import GeneticTest from "./components/geneticTest/GeneticTest";
import ProductFeat from "./components/productFeat/ProductFeat";
import ProductIntro from "./components/productIntro/ProductIntro";

function App() {
  return (
    <div className="App">
      Wang Hann
      <ProductIntro />
      <GeneticTest />
      <Competitor />
      <ProductFeat />
    </div>
  );
}

export default App;
