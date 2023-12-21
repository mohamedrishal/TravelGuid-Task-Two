import React from "react";
import slideone from "../Assets/festival one.jpg"
import slidetwo from "../Assets/festival two.jpeg"
import slideThree from "../Assets/festival three.jpg"

function ImgSlider() {
  return (
    <>
    <div className="my-5">
        <h1 className="text-center">SPACIAL KERALA FESTIVAL TOURS</h1>
    </div>
       <div id="carouselExampleCaptions"
                class="carousel slide carouselsize"
                data-bs-ride="carousel">
                <div class="carousel-indicators ">

                    <button type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0" class="active"
                        aria-current="true"
                        aria-label="Slide 1"></button>
                    <button type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div class="carousel-inner carouseldiv">
                    <div class="carousel-item active carouselitem"
                        data-bs-interval="1500">
                        <img style={{height:"26rem"}} src={slideone}
                            class="d-block w-100 img-fluid  " alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1 class="mb-5 carousel-h1 fs-1 text-primary">KERALA
                                BOAT
                                RACE</h1>
                            <p class="fs-3 mb-4">Some representative
                                placeholder content for
                                the
                                first slide.</p>
                            <button type="button"
                                class="btn btn-primary mb-5">MORE
                                DETAILS</button>

                        </div>
                    </div>
                    <div class="carousel-item carouselitem"
                        data-bs-interval="1500">
                        <img style={{height:"26rem"}} src={slidetwo}
                            class="d-block w-100 img-fluid" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1 class="mb-5 carousel-h1 fs-1 text-primary">THRISSUR
                                POORAM</h1>
                            <p class="fs-3 mb-4">Some representative
                                placeholder content for
                                the
                                second slide.</p>
                            <button type="button"
                                class="btn btn-primary mb-5">MORE
                                DETAILS</button>

                        </div>
                    </div>
                    <div class="carousel-item carouselitem"
                        data-bs-interval="1500">
                        <img style={{height:"26rem"}} src={slideThree}
                            class="d-block w-100  img-fluid" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1 class="mb-5  carousel-h1 fs-1 text-primary">Onam</h1>
                            <p class="fs-3 mb-4"> Some representative
                                placeholder content for
                                the
                                third slide.</p>
                            <button type="button"
                                class="btn btn-primary mb-5">MORE
                                DETAILS</button>

                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"
                        aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon"
                        aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

    </>
  );
}

export default ImgSlider;
