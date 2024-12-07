import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const showGitHubButton = !props.isBlog && props.ghLink;
  const showDemoButton = !props.isBlog && props.demoLink;
  return (
    <Card className="project-card-view">
      <div className="image-container">
        <Card.Img className="card-img" src={props.imgPath} alt="card-img" />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {showGitHubButton && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}

        {showDemoButton && !showGitHubButton && (
          <Button variant="primary" href={props.demoLink} target="_blank">
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}

        {showGitHubButton && showDemoButton && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
            </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
