import React from "react";
import one from '../Assets/one.jpg'
import two from '../Assets/couple 1.jpeg'
import three from '../Assets/couple 2.jpeg'

function Review() {
  return (
    <>
      <div className="container text-center mt-5" >
        <div>
          <i class="fa-solid fa-envelope-open-text fs-1 text text-warning"></i>
        </div>
        <div>
          <h2 class="ourcustomerheading">Our Customers Love</h2>
        </div>

        <div class="row d-flex justify-content-evenly mt-5">
          <div
            class="card bg-transparent border-light  text-center p-3 col-md-4 "
            style={{width: "18rem"}}
          >
            <img
              src={one}
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="text-success m-3 fs-5">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <h3>Michael & Jenny</h3>
            <p>"We created Lot of wonderful memories and trip was so nice"</p>
          </div>

          <div
            class="card bg-transparent border-light  text-center p-3 col-md-4 "
            style={{width: "18rem"}}
          >
            <img
              src={two} 
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="text-success m-3 fs-5">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <h3>Rohith & Amrutha</h3>
            <p>
              "A truly Satisfying Experience.Travel Guide have a great
              coordination"
            </p>
          </div>

          <div
            class="card bg-transparent border-light  text-center p-3 col-md-4 "
            style={{width: "18rem"}}
          >
            <img
              src={three}
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="text-success m-3 fs-5">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <h3>James & Anna</h3>
            <p>"They have really good Packages at reasonable rates"</p>
          </div>
        </div>
      </div>
      <div id="footer"></div>
    </>
  );
}

export default Review;
