import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Robotics Researcher",
          "MS Student @ UW–Madison",
          "RL & Sim-to-Real Enthusiast",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
