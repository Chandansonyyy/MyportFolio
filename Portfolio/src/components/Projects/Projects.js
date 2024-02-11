import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/sss.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Portfolio"
              description="Welcome to my digital space! As a computer science engineer, this portfolio encapsulates my journey through the realms of code and creativity. Explore a collection of projects that showcase not only technical prowess but also a passion for innovation. Let's connect and discuss how we can bring your digital ideas to life!"
              ghLink=""
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
