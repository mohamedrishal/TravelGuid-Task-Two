import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        style={{ padding:"20px",width: "100%", height: "100%",backgroundColor:"#252525" }}
        className="d-flex  flex-column 
    justify-content-center align-items-center border  mt-5"
      >
        <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap">
          <div className="website " style={{ width: "400px" }}>
            <h4 className="fw-bolder text-white">
            <span style={{ color: "yellow", fontSize: "32px" }}>
              <i class="fa-solid fa-globe"></i> Travel
            </span>
            Guide
            </h4>
            <h6 className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est 
            </h6>
            <p className="text-white">Currently v1.0.0.</p>
          </div>
          <div className="links d-flex  flex-column ">
            <h4 className="text-white">About us</h4>
            <Link
              className="text-white"
              to={"/"}
              style={{ textDecoration: "none" }}
            >
              {" "}
              Our Company
            </Link>
            <Link
              className="text-white"
              to={"/login"}
              style={{ textDecoration: "none" }}
            >
              {" "}
              Our Management
            </Link>

            <Link
              className="text-white"
              to={"/register"}
              style={{ textDecoration: "none" }}
            >
              {" "}
              UK
            </Link>
          </div>
          <div className="guides d-flex  flex-column ">
            <h4 className="text-white">Country</h4>
            <Link
              className="text-white"
             
              style={{ textDecoration: "none" }}
            >
              {" "}
              India
            </Link>
            <Link
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              {" "}
              UAE
            </Link>

            <Link
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Brazil
            </Link>
          </div>
          <div className="contacts">
            <h4 className="text-white">Contact Us</h4>
            <div className="sub d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
              />
              <button className="btn btn-light ms-3">
                <i class="fa-solid fa-arrow-right text-dark"></i>
              </button>
            </div>
            <div className="icons fs-4 d-flex justify-content-evenly mt-4">
              <Link
                className="text-white"
                to={"https://mail.google.com/"}
                style={{ textDecoration: "none" }}
              >
                <i class="fa-solid fa-envelope"></i>{" "}
              </Link>

              <Link
                className="text-white"
                to={"https://getbootstrap.com/"}
                style={{ textDecoration: "none" }}
              >
                <i className="fa-brands fa-facebook"></i>{" "}
              </Link>

              <Link
                className="text-white"
                to={"https://react-bootstrap.netlify.app/"}
                style={{ textDecoration: "none" }}
              >
                <i className="fa-brands fa-twitter"></i>{" "}
              </Link>

              <Link
                className="text-white"
                to={"/watch-history"}
                style={{ textDecoration: "none" }}
              >
                <i className="fa-brands fa-github"></i>{" "}
              </Link>

              <Link
                className="text-white"
                to={"/watch-history"}
                style={{ textDecoration: "none" }}
              >
                <i className="fa-brands fa-linkedin-in"></i>{" "}
              </Link>
            </div>
          </div>
        </div>
        <p className="text-white">
          copyright @ 2023 Travel Guid. buit with React.
        </p>
      </div>
    </>
  );
}

export default Footer;
