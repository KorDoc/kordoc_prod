import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="kordoc__possibility section__padding" id="possibility">
    <div className="kordoc__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="kordoc__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>The possibilities can range from tradition to moderate with a chance to still be first. Directly impact generations of the past, present and future with an environmentally safe approach. </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility