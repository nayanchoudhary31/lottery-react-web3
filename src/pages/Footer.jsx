import React from "react";
import { Container,Row,Col,InputGroup,FormControl,Button } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Container className="mt-5  py-5 border-top">
        <Row className="row d-flex justify-content-between">
          <Col className="lotto-wrapper">
            <h3 className="lotto-heading">About LottoEther</h3>
            <ul className="lotto-ul">
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">How it Work</a>
              </li>
              <li>
                <a href="/">Our Service</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col className="lotto-quick-links">
            <h3 className="lotto-quick-links-heading">Quick Links</h3>
            <ul className="lotto-ul">
              <li>
                <a href="/">My Account</a>
              </li>
              <li>
                <a href="/">Affilate Program</a>
              </li>
              <li>
                <a href="/">Terms & Condition</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">LottoEther Licenses</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h1>Email News Letters</h1>
            <p>
              Subscribe now and receive weekly newsletter for latest draw and
              offer news and much more!
            </p>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter your Email Address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button className="email-btn" id="button-addon2">
                Button
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}
