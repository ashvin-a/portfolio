import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

const teachingRoles = [
  {
    course: "ECE 439 — Introduction to Robotics",
    semester: "Summer 2026",
    instructor: "Prof. Peter G. Adamczyk",
  },
  {
    course: "ECE 439 — Introduction to Robotics",
    semester: "Fall 2026",
    instructor: "Prof. Peter G. Adamczyk",
  }, 
  {
    course: "ECE 376 — Introduction to Mechatronics",
    semester: "Fall 2026",
    instructor: "Prof. Peter G. Adamczyk",
  },
];

const mentorship = [
  {
    name: "Student / Group Name",
    topic: "Project or research topic",
    duration: "Month YYYY – Month YYYY",
  },
];

function Teaching() {
  return (
    <Container fluid className="teaching-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Teaching</strong>
        </h1>

        <Row style={{ justifyContent: "center" }}>
          <Col md={10} style={{
              paddingTop: "60px",
              paddingBottom: "80px",
            }}>
            <h2 className="teaching-subsection">Teaching Assistantships</h2>
            {teachingRoles.map((role, i) => (
              <div key={i} className="publication-entry">
                <p className="pub-title">{role.course}</p>
                <p className="pub-authors">{role.semester} &mdash; {role.instructor}</p>
              </div>
            ))}

            {/* <h2 className="teaching-subsection" style={{ marginTop: "40px" }}>Mentorship</h2>
            {mentorship.map((m, i) => (
              <div key={i} className="publication-entry">
                <p className="pub-title">{m.name}</p>
                <p className="pub-authors">{m.topic}</p>
                <p className="pub-venue">{m.duration}</p>
              </div>
            ))} */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Teaching;
