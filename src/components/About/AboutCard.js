import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I was born and raised in <span className="purple">Kazhakuttom</span>, situated at
            Kerala, India.
            <br/><br/>I completed my undergraduate in <span className="purple">Electrical & Electronics Engineering</span>
            &nbsp;from Government Engineering College, Barton Hill with a minor in <span className="purple">
            Information Technology</span>. Currently, I'm pursuing my master's degree in Electrical and Computer Engineering
            from the <span className="purple">University of Wisconsin-Madison</span>.
            <br /><br/>
            I've two years of work experience as an AI/ML engineer at <span className="purple">Qburst Technologies Pvt. Ltd</span>.
            A day of mine would include a lot of research, experimentation and testing out new methodologies
            and technologies to optimize performance.
            <br />
            <br />
            I am proficient in programming languages like
            <b className="purple"> Python, Javascript </b>and<b className="purple"> Rust </b>,
            enabling me to bring my ideas to life through code.
            <br />
            <br />
            My hobbies include weightlifting, photography, and occasionally playing the piano and guitar, which help me strike a balance between work and play.
            <br />
            <br />
            My other interests include playing badminton, watching movies and anime (yeah I'm a nerd!) and watching science videos of Veritasium, VSauce, Electroboom, NileRed and the list goes on.......
            <br />
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
