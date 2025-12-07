import React from "react";
import "./Masthead.css";
import sign1 from "../../Assets/sign1.png";
import sign2 from "../../Assets/sign2.png";
import sign3 from "../../Assets/sign3.png";
import sign4 from "../../Assets/sign4.png";

function Masthead() {
  return (
    <section className="minimal-hero">

      <h1 className="hero-title">Welcome to KarChinha AI</h1>

      <p className="hero-subtitle">
        Learn, translate, and explore Indian Sign Language with tools designed
        for simplicity, accessibility, and everyday use.
      </p>

      <div className="sign-strip">
        <img src={sign1} alt="sign" />
        <img src={sign2} alt="sign" />
        <img src={sign3} alt="sign" />
        <img src={sign4} alt="sign" />
      </div>

      <a href="#intro" className="hero-btn">
        Get Started
      </a>

    </section>
  );
}

export default Masthead;
