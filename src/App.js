import "./App.css";
import Header from "./Componets/Header";
import img1 from "./Assets/mountain1.png";
import img2 from "./Assets/mountain2.png";
import text from "./Assets/text.png";
import { useState } from "react";
import ImgSlider from "./Componets/ImgSlider";
import Footer from "./Componets/Footer";
import Review from "./Componets/Review";
import About from "./Componets/About";
import Packages from "./Componets/Packages";

function App() {
  const [offSet, setOffSet] = useState();

  const handleScroll = () => setOffSet(window.pageYOffset);
  window.addEventListener("scroll", handleScroll);

  return (
    <div>

      <Header />

      <div className="App">
        <div className="zone">
          <img
            style={{ width: 100 + offSet * 0.3 + "%" }}
            src={img1}
            id="img1"
            alt="Loading"
          />
          <img
            style={{ width: 100 + offSet * 0.3 + "%" }}
            src={img2}
            id="img2"
            alt="Loading"
          />
          <img
            className="img-fluid"
            style={{ top: `-${8 + offSet * 0.3 + "%"}` }}
            src={text}
            id="text"
            alt="Loading"
          />
        </div>
        <About/>

       <div className="container">
          <Packages />
       </div>
        <ImgSlider />

        <Review />
      </div>

      <Footer />

    </div>
  );
}

export default App;
