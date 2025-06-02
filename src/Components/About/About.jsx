import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me </h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              maiores, ratione itaque impedit enim nulla quae reprehenderit fuga
              deserunt necessitatibus!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              qui!
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML&CSS</p>
              <hr style={{ width: "800%" }} />
            </div>
            <div className="about-skill">
              <p>React js</p>
              <hr style={{ width: "600%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "700%" }} />
            </div>
            <div className="about-skill">
              <p>Next js</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>2+</h1>
          <p>Years of Experiance</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>4+</h1>
          <p>projects completed</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>5+</h1>
          <p>Happy clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
