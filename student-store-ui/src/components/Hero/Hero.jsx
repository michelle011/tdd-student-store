import React from "react";
import "./Hero.css";

// Renders header and welcome message
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-top-section">
        <p className="intro">
          Welcome, <br />
          Find your merch!
        </p>
        <div className="hero-img-section">
          <img
            src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"
            className="hero-img"
            alt="hero"
          ></img>
        </div>
      </div>
      <div className="hero-bottom-section">
        <p className="description">
          We have all kinds of goodies. Click on any of the items below to get
          started and fill up your shopping cart. <br />
          Checkout on the sidebar whenever you are ready!
        </p>
      </div>
    </div>
  );
}
