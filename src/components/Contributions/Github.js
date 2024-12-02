import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row className="github-contrib"style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
      </h1>
      <GitHubCalendar
        username="ashvin-a"
        blockSize={15}
        blockMargin={5}
        color="#FF6500"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
