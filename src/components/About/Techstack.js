import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiRust,
} from "react-icons/di";
import {
  SiPytorch,
  SiDocker,
  SiPostgresql,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiRaspberrypi,
  SiArduino
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRust />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiRaspberrypi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiArduino />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
    </Row>
  );
}

export default Techstack;
