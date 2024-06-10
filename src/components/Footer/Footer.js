import { Container, Row, Col } from "react-bootstrap";
// import navsIcon1 from "../../assets/img/nav-icon1.png"
// import navsIcon2 from "../../assets/img/nav-icon2.svg";
// import navsIcon3 from "../../assets/img/nav-icon3.png";



import React from 'react';


export const Footer = () => {
  return (
    <footer className="text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col md="4">
           
            {/* <p>
              We are a company dedicated to providing the best service possible.
            </p> */}
          </Col>
          <Col md="4">
            <h5>Contact Us</h5>
            <p>
             Chaudhary Goods Transport Company, Sarai Alamgir<br />
              Phone: +92-335-5440544<br/>
              Address: Near 132 KV Grid Station Wapda Colony Bijli Ghar, Sarai Alamgir
            </p>
          </Col>
          <Col md="4">
            {/* <h5>Follow Us</h5>
            <a href="https://facebook.com" className="text-white m-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-white m-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-white m-2">
              <i className="fab fa-instagram"></i>
            </a> */}
          </Col>
        </Row>
        <Row>
          <Col className="mt-4">
            <p>&copy; {new Date().getFullYear()} Muhammad Awais@Copyright. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

    