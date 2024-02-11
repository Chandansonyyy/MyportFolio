import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaBitcoin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdComputer } from "react-icons/md";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={6} className="tech-icons">
        <h2>Internship Representative   <MdComputer /></h2>
        <h6>( Computer Science and Engineering’ 25 ) </h6>
    
      </Col>
      <Col xs={4} md={6} className="tech-icons" >
      <h3>Web Development Head   <CgWebsite /></h3>
      <h6>( Entrepreneurship-Cell NITJ )</h6>
      </Col>
      <Col xs={4} md={6} className="tech-icons">
      <h3>Student Lead   <FaBitcoin /></h3>
      <h6>( Algorand Blockchain Club (ABC) )  </h6>
      </Col>
     
    </Row>
  );
}

export default Toolstack;
