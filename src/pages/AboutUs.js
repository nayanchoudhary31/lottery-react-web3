import React from "react";
import { Col, Container, Row, Figure } from "react-bootstrap";
import About1 from "../images/about-us1.jpg";
import Figure1 from '../images/figure1.jpg';
import Figure2 from '../images/figure2.jpg';
import Figure3 from '../images/figure3.jpg';
import Figure4 from '../images/figure4.jpg';




function AboutUs() {
  return (
    <>
      <Container className="container-fluid mt-2 ">
        <Row className="row">
          <Col className="col-6">
            <div className="bannner-text-wrapper">
              <h1>A Few Words About Us</h1>
              <p>
                Sorteo is online lottery platform inspired by few sorteo lover's
                fantasy of the ultimate lottery platfrom.
              </p>
              <p>
                Our goal is to provide our customers with the most convenient
                and enjoyable lottery purchasing experience.
              </p>
            </div>
          </Col>
          <Col className="col-6 banner-img">
            <img src={About1} alt="banner" />
          </Col>
        </Row>
      </Container>
      <Container className="border mt-5">
        <Row className='row'>
          <Col className='col-3'>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={Figure1}
              />
              <Figure.Caption>
                Biggest Lottery Jackpots
              </Figure.Caption>
            </Figure>
          </Col>
          <Col className='col-3'>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={Figure3}
              />
              <Figure.Caption>
                Save & Secure Playing
              </Figure.Caption>
            </Figure>
          </Col>
          <Col className='col-3'>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={Figure2}
              />
              <Figure.Caption>
                Instant Payout System 
              </Figure.Caption>
            </Figure>
          </Col>
          <Col className='col-3'>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={Figure4}
              />
              <Figure.Caption>
                Dedicated Support
              </Figure.Caption>
            </Figure>
          </Col>  
        </Row>
      </Container>
    </>
  );
}

export default AboutUs;
