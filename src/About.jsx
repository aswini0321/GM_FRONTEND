import React from "react";
import "./About.css";
import { Link, useNavigate } from "react-router-dom"; 

const About = () => {
  const navigate = useNavigate(); 

  return (
    <div className="about-container">
      <div className="about-top-left">
        <button className="about-back-home-btn" onClick={() => navigate("/")}>
          ⬅
        </button>
      </div>

      
      <section className="about-intro">
        <h1>About CommunionHub</h1>
        <p>
          CommunionHub is a platform designed to bring people together through meaningful events and community engagement. 
          Whether you’re looking to connect with like-minded individuals, participate in faith-based gatherings, or contribute 
          to social causes, CommunionHub provides a space where everyone is welcome.
        </p>
      </section>

    
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At <strong>CommunionHub</strong>, our goal is to foster <strong>unity, growth, and shared experiences</strong>. 
          We believe in the power of <strong>community events</strong> to inspire personal and spiritual development while strengthening social bonds.
        </p>
      </section>

      
      <section className="about-what-we-offer">
        <h2>What We Offer</h2>
        <div className="about-offer-grid">
          <div className="about-offer-item">
            <h3>🎉 Diverse Events</h3>
            <p>Join <em>religious gatherings, charity initiatives, and social meetups</em> that resonate with your interests.</p>
          </div>
          <div className="about-offer-item">
            <h3>🔍 Easy Event Discovery</h3>
            <p>Browse and filter events by categories like <em>Religious, Social, and Charity</em>.</p>
          </div>
          <div className="about-offer-item">
            <h3>🤝 Community Engagement</h3>
            <p>Connect with individuals who share your beliefs, values, and passions.</p>
          </div>
          <div className="about-offer-item">
            <h3>📢 Create & Share</h3>
            <p>Host your own events to reach a wider audience and build a stronger community.</p>
          </div>
        </div>
      </section>

      
      <section className="about-join-us">
        <h2>Join Us</h2>
        <p>
          Be part of a growing network that <strong>connects, supports, and uplifts</strong> communities. 
          Explore upcoming events, make new connections, and contribute to a cause that matters.
        </p>
      </section>
    </div>
  );
};

export default About;
