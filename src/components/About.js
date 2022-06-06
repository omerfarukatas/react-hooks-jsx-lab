import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About me</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa</p>
    <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
