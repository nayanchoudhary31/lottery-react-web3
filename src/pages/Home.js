import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from "../images/lottery.jpg";
import {
  Col,
  Container,
  Row,
  CardGroup,
  Card,
  Button,  
} from "react-bootstrap";
import Card1 from "../images/card1.jpg";
import Card2 from "../images/card2.jpg";
import Card3 from "../images/card3.jpg";

function Home() {
  return (
    <>
      <Container className="container-fluid mt-2 ">
        <Row className="row">
          <Col className="col-6">
            <div className="bannner-text-wrapper">
              <h1>Take the chance to change your life</h1>
              <p>
                Sorteo is online lottery platform inspired by few sorteo lover's
                fantasy of the ultimate lottery platfrom.
              </p>
              <div className="connect-btn">
                <button>Connect Now!</button>
              </div>
            </div>
          </Col>
          <Col className="col-6 banner-img">
            <img src={banner} alt="banner" />
          </Col>
        </Row>
      </Container>
      <Container className="text-center mt-3">
        <h2>Lottery Jackpot</h2>
        <p>
          Choose from the Powerball, Mega Millions, Lotto or Lucky Day Lotto and
          try for a chance to win a big cash prize
        </p>
        <CardGroup className="mx-auto">
          <Card className="text-center">
            <Card.Img variant="top" src={Card1} />
            <Card.Body>
              <Card.Title className="text-center">US PowerBall</Card.Title>
              <Card.Text>
                <h1 className="text-center">€161,557,581</h1>
                <p className="text-center">Next Draw : 00 days 00:00:00</p>
              </Card.Text>
              <Button variant="primary">Play Now</Button>
            </Card.Body>
          </Card>
          <Card className="text-center">
            <Card.Img variant="top" src={Card2} />
            <Card.Body>
              <Card.Title>US PowerBall</Card.Title>
              <Card.Text>
                <h1 className="text-center">€161,557,581</h1>
                <p className="text-center">Next Draw : 00 days 00:00:00</p>
              </Card.Text>
              <Button variant="primary">Play Now</Button>
            </Card.Body>
          </Card>
          <Card className="text-center">
            <Card.Img variant="top" src={Card3} />
            <Card.Body>
              <Card.Title className="text-center">US PowerBall</Card.Title>
              <Card.Text>
                <h1 className="text-center">€161,557,581</h1>
                <p className="text-center">Next Draw : 00 days 00:00:00</p>
              </Card.Text>
              <Button variant="primary">Play Now</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
}

export default Home;
