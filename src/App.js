import "./App.css";
import Header from "./Componets/Header";
import img1 from "./Assets/mountain1.png";
import img2 from "./Assets/mountain2.png";
import text from "./Assets/text.png";
import { useState } from "react";
import ImgSlider from "./Componets/ImgSlider";
import Packages from "./Componets/Packages";
import Footer from "./Componets/Footer";
import Review from "./Componets/Review";

function App() {
  const [offSet, setOffSet] = useState();

  const handleScroll = () => setOffSet(window.pageYOffset);
  window.addEventListener("scroll", handleScroll);

  return (
    <div >
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
        <div className="container">
          <div className="our-services text-start">
          <h5>🌟 Adventure Awaits with Travel Guid! 🌍✈️</h5>

<p>Are you ready to turn your travel dreams into reality? Look no further! Travel Guid is your gateway to unparalleled adventures and unforgettable experiences.</p>

<h5>✈️ Explore Exotic Destinations:</h5>
<p>Embark on a journey of discovery with our handpicked travel packages. From the serenity of tropical beaches to the awe-inspiring beauty of mountain landscapes, we have the perfect destination for every explorer.</p>

<h5>🛌 Luxury Awaits You:</h5>
<p>Indulge in comfort and style with our selection of luxurious accommodations. Whether you prefer a boutique hotel or a beachfront resort, we ensure your stay is as exceptional as the destinations you'll explore.</p>

<h5>🚗 Seamless Travel Experiences:</h5>
<p>Say goodbye to travel hassles! Our transportation packages guarantee a smooth journey, allowing you to focus on the excitement of the adventure ahead.</p>

<h5>📖 Inspiring Travel Stories:</h5>
<p>Get inspired by real travel experiences! Dive into our collection of captivating blogs, filled with insider tips, hidden gems, and the extraordinary stories of fellow travelers.</p>

<h5>🌐 Easy Booking, 24/7 Support:</h5>
<p>Booking your dream vacation has never been easier. Enjoy the convenience of online booking with the reassurance of 24/7 support from our dedicated team.</p>

<h5>🎁 Exclusive Offers Await You:</h5>
<p>Unlock exclusive deals and discounts when you book with us. Your next adventure is not just a click away; it's a fantastic offer waiting to be discovered!</p>

          </div>

          <h1 className="my-5" >Packages </h1>
          <p>
           <Packages/>
          </p>
        </div>

        <ImgSlider />

        <Review/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
