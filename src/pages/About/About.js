import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
            
              <p>
                Dynamic and innovative computer engineering graduate with a passion for technology and a proven track record of driving impactful solutions. Proficient in software development, hardware design, and system optimization. Adept at thriving in fast-paced environments and committed to continuous growth. Ready to leverage expertise to contribute to a forward-thinking organization's technological advancements.
              </p>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-image">
              <img
                src="https://static.javatpoint.com/blog/images/how-to-be-a-full-stack-developer.png"
                alt="Full Stack Developer"
              />
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
