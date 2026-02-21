import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I was born and raised in <span className="purple">Kazhakuttom</span>, situated at Trivandrum,
            Kerala, India.
            <br/><br/>I completed my undergraduate in <span className="purple">Electrical & Electronics Engineering</span>
            &nbsp;from Government Engineering College, Barton Hill with a minor in <span className="purple">
            Information Technology</span>. Currently, I'm pursuing my master's degree in Electrical and Computer Engineering
            from the <span className="purple">University of Wisconsin-Madison</span>.
            <br /><br/>
            I have worked on advanced robotic systems, including developing a squad of humanoid robots that autonomously
            play football using <span className="purple">multi-agent reinforcement learning</span> in the 
            <span className="purple"> Prediction-Action Laboratory</span> and designing an obstacle avoidance algorithm for a Mars
            rover as a member of <span className="purple">Wisconsin Robotics</span>.
            <br />
            <br />
            I am proficient in programming languages like
            <b className="purple"> Python, C++ </b>and<b className="purple"> Rust</b>,
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
