import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
// import contactUs from '../images/form-bg.jpg'
import { FcContacts } from "react-icons/fc";
import {FcVoicemail} from 'react-icons/fc';

function ContactUs() {
  return (
    <>
      <Container className="contact-container mt-5 md-3 ">
        <h2 className="text-center">Contact Us</h2>
        <Row>
          <Col className="col-6">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone No</Form.Label>
                <Form.Control type="number" placeholder="Enter Your Phone No" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col className="form-contact-us col-6 border">
            {/* <img src={contactUs} alt="about-us" /> */}
            <div className=' message-heading text-center mt-5'>
            <h2>We are Available for You</h2>
            <p>24 Hours A Day, 365 Days A Year</p>
            </div>
            {/* <hr></hr> */}
            <div className='contact-div text-center'>
              <h2>Contact Us</h2>
              <ul>
                <li>
                  <div className='contact-div-li'>
                    <FcContacts size="1.5rem" />
                    <p>012 345 6789</p>
                    <p>012 345 6789</p>
                  </div>
                </li>
                <li>
                  <div className='contact-phone-li'>
                      <FcVoicemail />
                      <p>info@sorteo.com</p>
                      <p>info@sorteo.com</p>
                      {/* <hr></hr> */}
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactUs;
