import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am an MS student in Electrical and Computer Engineering at the{" "}
            <span className="purple">University of Wisconsin–Madison</span>, advised by{" "}
            <span className="purple">Prof. Josiah Hanna</span> in the{" "}
            <span className="purple">Prediction-Action Laboratory</span>.
            <br /><br />
            My research interests lie at the intersection of{" "}
            <b className="purple">Robot Learning</b>,{" "}
            <b className="purple">Sim-to-Real Transfer</b>, and{" "}
            <b className="purple">Robotic Perception</b>. I am particularly interested in
            developing learning algorithms that allow autonomous agents to acquire
            robust skills in simulation and deploy them reliably on physical hardware.
            <br /><br />
            Prior to UW–Madison, I completed my undergraduate degree in{" "}
            <span className="purple">Electrical & Electronics Engineering</span> (minor in{" "}
            <span className="purple">Information Technology</span>) at Government Engineering
            College, Barton Hill, Kerala, India.
            <br /><br />
            Outside of research, I enjoy weightlifting, photography, and the occasional
            piano or guitar session.
            <br />
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
