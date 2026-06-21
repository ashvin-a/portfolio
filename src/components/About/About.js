import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import robotimg from "../../Assets/robot.svg";

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
            <img src={robotimg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Research <strong className="purple">Interests</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={10}>
            <ul className="research-interests-list">
              <li>
                <span className="purple">On Robot Learning</span> — creating sample efficient learning algorithms for robotic systems.
              </li>
              <li>
                <span className="purple">Multi-Agent Reinforcement Learning</span> — coordination,
                emergent behavior, and scalable training for teams of autonomous agents.
              </li>
              <li>
                <span className="purple">Sim-to-Real Transfer</span> — closing the reality gap
                so policies trained in simulation deploy robustly on physical hardware.
              </li>
              <li>
                <span className="purple">Robot Perception</span> — vision-based state estimation
                and sensor fusion for real-world robotic systems.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
