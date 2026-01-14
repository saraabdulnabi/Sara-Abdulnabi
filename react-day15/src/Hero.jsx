import React from "react";
import "./Hero.css"; // Import your Hero CSS

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6 hero-content">
            <h1 className="display-3 fw-bold mb-3">Stack Academy</h1>
            <h2 className="display-6 mb-4">Where Creativity Meets Code</h2>

            <div className="typewriter-container mb-4">
              <h3 className="typewriter-text">
                Code The Web :)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Own The Stack !
              </h3>
            </div>

            <div className="hero-highlights mb-5">
              <p>
                <i className="fas fa-lightbulb me-2"></i>Turn ideas into code 
                <span className="separator mx-3">|</span>
                <i className="fas fa-graduation-cap me-2"></i>Go from learner to builder
              </p>
              <p>
                <i className="fas fa-rocket me-2"></i>Launch your career 
                <span className="separator mx-3">|</span>
                <i className="fas fa-code me-2"></i>Code with confidence
              </p>
            </div>

            <div className="hero-buttons">
              <a href="#paths" className="btn btn-primary btn-lg">
                Get Started <i className="fas fa-arrow-right ms-2"></i>
              </a>
              <a href="#courses" className="btn btn-outline-primary btn-lg">
                View Courses <i className="fas fa-book ms-2"></i>
              </a>
            </div>
          </div>

          {/* Right Content - Code Animation */}
          <div className="col-lg-6 hero-image">
            <div className="code-animation">
              <div className="code-line">
                <span className="code-tag">&lt;div</span>{" "}
                <span className="code-attr">class</span>=
                <span className="code-value">"creative-coder"</span>
                <span className="code-tag">&gt;</span>
              </div>
              <div className="code-line indent-1">
                <span className="code-tag">&lt;h1&gt;</span>Hello World!<span className="code-tag">&lt;/h1&gt;</span>
              </div>
              <div className="code-line indent-1">
                <span className="code-tag">&lt;p&gt;</span>Building the web, one line at a time.<span className="code-tag">&lt;/p&gt;</span>
              </div>
              <div className="code-line">
                <span className="code-tag">&lt;/div&gt;</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
