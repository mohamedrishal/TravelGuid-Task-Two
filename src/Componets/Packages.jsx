import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import goa from '../Assets/goa-honeymoon-packages.jpg'
import mald from '../Assets/Maldives honey.jpeg'
import manali from '../Assets/himachal-manali-honeymoon-package-product-image-discover-kullu-manali-649x396.jpg'
import kera from '../Assets/talk-about-travelling-4-1024x576.jpg'


function Packages() {
  return (
    <>
      <Row>
        <Col style={{ marginTop: "15px" }} sm={12} md={6} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={goa} />
            <Card.Body>
              <Card.Title>Goa</Card.Title>
              <Card.Text>
              <p class="text-danger">(04 Nights / 05 Days)</p>
                        <p class="card-text">Some quick example text to
                            build on
                            the card title and make up the bulk of the card's
                            content.</p>
              </Card.Text>
              <Button variant="primary">BOOK NOW</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ marginTop: "15px" }} sm={12} md={6} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={manali} />
            <Card.Body>
              <Card.Title>Manali</Card.Title>
              <Card.Text>
              <p class="text-danger">(04 Nights / 05 Days)</p>
                        <p class="card-text">Some quick example text to
                            build on
                            the card title and make up the bulk of the card's
                            content.</p>
              </Card.Text>
              <Button variant="primary">BOOK NOW</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ marginTop: "12px" }} sm={12} md={6} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" style={{height:"193px"}} src={kera} />
            <Card.Body>
              <Card.Title>Kerala</Card.Title>
              <Card.Text>
              <p class="text-danger">(04 Nights / 05 Days)</p>
                        <p class="card-text">Some quick example text to
                            build on
                            the card title and make up the bulk of the card's
                            content.</p>
              </Card.Text>
              <Button variant="primary">BOOK NOW</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ marginTop: "12px" }} sm={12} md={6} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={mald} />
            <Card.Body>
              <Card.Title>Maldive</Card.Title>
              <Card.Text>
              <p class="text-danger">(04 Nights / 05 Days)</p>
                        <p class="card-text">Some quick example text to
                            build on
                            the card title and make up the bulk of the card's
                            content.</p>
              </Card.Text>
              <Button variant="primary">BOOK NOW</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="more-package-btn my-4 d-flex justify-content-center align-items-center">
        <button type="button" class="btn  btn-primary ">
          MORE PACKAGES
        </button>
      </div>
    </>
  );
}

export default Packages;
