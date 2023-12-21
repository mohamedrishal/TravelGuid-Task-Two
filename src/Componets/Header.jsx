import React from "react";

function Header() {
  return (
    <>
      <nav style={{background:"#252525"}} class="navbar navbar-expand-lg ">
        <div class="container">
          <a class="navbar-brand" href="#" className="text-white text-decoration-none">
            <span  style={{ color: "yellow", fontSize: "32px" }}><i class="fa-solid fa-globe"></i> Travel</span>
            Guide
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon border border-white text-white bg-transparent"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item" >
                <a class="nav-link   active" aria-current="page" href="#">
<span className="text-white">                  Home</span>
                </a>
              </li>
              <li class="nav-item" >
                <a class="nav-link"   href="#">
<span className="text-white">                    Packages</span>
                </a>
              </li>
              <li class="nav-item" >
                <a class="nav-link"   href="#">
                  <span className="text-white">Transport Packages</span>
                </a>
              </li>
              <li class="nav-item" >
                <a class="nav-link"   href="#">
<span className="text-white">                  Hotels</span>
                </a>
              </li>
              <li class="nav-item" >
                <a class="nav-link"   href="#">
<span className="text-white">                  Blogs</span>
                </a>
              </li>
              <li class="nav-item" >
                <a class="nav-link"   href="#">
<span className="text-white">                  Support</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
