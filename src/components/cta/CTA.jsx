import React from 'react';
import './cta.css';

const CTA = () => (
  <div className="kordoc__cta">
    <div className="kordoc__cta-content">
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start explore what's possible.</h3>
    </div>
    <div className="kordoc__cta-btn">
      <button type="button" onClick={() => window.location.href="#home"}>Get Started</button>
  </div>
</div>
);

export default CTA
