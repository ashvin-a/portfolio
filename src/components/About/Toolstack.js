import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiOpenai,
  SiGitlab,
  SiJira,
} from "react-icons/si";
import { VscAzure, VscVscode } from "react-icons/vsc";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "60px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscAzure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
      </Col>
    </Row>
  );
}

export default Toolstack;
