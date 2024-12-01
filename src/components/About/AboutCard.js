import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I was born and raised in a bustling city called <span className="purple">Kazhakuttom</span>, situated at
            Trivandrum, India.
            <br/><br/>I completed my undergraduate in <span className="purple">Electrical & Electronics Engineering</span>
            &nbsp;from Government Engineering College, Barton Hill with a minor in <span className="purple">
            Information Technology</span>. 
            <br /><br/>
            I am currently employed as an AI/ML engineer at <span className="purple">Qburst Technologies Pvt. Ltd</span>.
            A day of mine would include a lot of research, experimentation and testing out new methodologies
            and technologies to optimize performance.
            <br />
            <br />
            My other interests include watching movies and anime (yeah I'm a nerd!) and watching science videos of Veritasium, VSauce, Electroboom, NileRed and the list goes on.......
            <br />
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
