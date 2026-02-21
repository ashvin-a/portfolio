import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Robotics Software Engineer",
          "RL Research Enthusiast",
          "AI/ML Engineer",
          "Open Source Contributor",
          "Hobbyist Hacker",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
