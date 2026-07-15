import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import robotimg from "../../Assets/about.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={robotimg} alt="about" className="img-fluid" style={{ maxHeight: "550px", justifyContent:"center"}}/>
          </Col>
        </Row>

        <h1 className="project-heading">
          Research <strong className="purple">Interests</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={10}>
            <ul className="research-interests-list">
              <li>
                <span className="purple">Cross-Embodiment Robot Learning</span> — robot learning
                and adaptation across diverse embodiments.
              </li>
              <li>
                <span className="purple">Model-Based Reinforcement Learning</span> — and its
                application on partially observable conditions.
              </li>
              <li>
                <span className="purple">State Space Models</span> — in state estimation and
                perception.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
