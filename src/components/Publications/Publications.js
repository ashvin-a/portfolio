import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
const publications = [
  {
    title: "Sample Efficient On Robot Reinforcement learning ",
    authors: ["Ryan Gao","Ashvin Anilkumar", "William Cong", "Nicholas Corrado", "Josiah P. Hanna"],
    venue: "Targeting ICRA",
    year: "2026",
    links: {
      project: "https://pages.cs.wisc.edu/~jphanna/robocup.html",
    },
  },
  {
    title: "Chrono Agentic: Evidence-Grounded Agents for Executable World Simulation",
    authors: [ "Jingquan Wang","Hongyu Wang", "Andrew Negrut", "Ashvin Anilkumar", "Radu Serban", "Dan Negrut"],
    venue: "In Preparation",
    year: "2026",
    links: {
      pdf: "https://drive.google.com/file/d/1lAGrTkgWA8ZGuWRWj7ayIcT67YbGelJD/view?usp=drive_link",
      project: "https://pages.cs.wisc.edu/~jphanna/robocup.html",
    },
  },
  {
    title: "Performance Analysis of State Space Models for Real-Time Visual Odometry",
    authors: ["Ashvin Anilkumar"],
    venue: "Conference on Robot Learning (CoRL)",
    year: "2026",
    links: {
      pdf: "https://drive.google.com/file/d/1cOycChFU4y9ChY3HucPVrSV3KoPEemb_/view?usp=drive_link",
    },
  },
];

function PublicationEntry({ pub }) {
  return (
    <div className="publication-entry">
      <p className="pub-title">{pub.title}</p>
      <p className="pub-authors">
        {pub.authors.map((author, i) => (
          <span key={i}>
            {author === "Ashvin Anilkumar" ? (
              <span className="purple">{author}</span>
            ) : (
              author
            )}
            {i < pub.authors.length - 1 && ", "}
          </span>
        ))}
      </p>
      <p className="pub-venue">
        {pub.venue}{pub.year ? `, ${pub.year}` : ""}
        {pub.links && (
          <span className="pub-links">
            {pub.links.pdf && (
              <a href={pub.links.pdf} target="_blank" rel="noreferrer"> [PDF]</a>
            )}
            {pub.links.arxiv && (
              <a href={pub.links.arxiv} target="_blank" rel="noreferrer"> [arXiv]</a>
            )}
            {pub.links.project && (
              <a href={pub.links.project} target="_blank" rel="noreferrer"> [Project]</a>
            )}
          </span>
        )}
      </p>
    </div>
  );
}

function Publications() {
  return (
    <Container fluid className="publication-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Publications</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={10}
          style={{
              paddingTop: "60px",
              paddingBottom: "80px",
            }}>
            {publications.map((pub, i) => (
              <PublicationEntry key={i} pub={pub} />
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Publications;
