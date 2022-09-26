import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="kordoc__footer section__padding">
    <div className="kordoc__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others?</h1>
    </div>

    <div className="kordoc__footer-btn">
      <p className="p__opensans" onClick={() => window.location.href="#home"}>Request Early Access</p>
    </div>
    <div className="kordoc__footer-links">
      <div className="kordoc__footer-links_logo">
        <p>Kor Doc, <br /> All Rights Reserved</p>
      </div>
      <div className="kordoc__footer-links_div">
        <h4>Links</h4>
        <p className="p__opensans" onClick={() => window.location.href="https://twitter.com/kordoc_"}>Social Media</p>
        <p>Contact</p>
      </div>
      <div className="kordoc__footer-links_div">
        <h4>Company</h4>
        <p>Contact</p>
      </div>
      <div className="kordoc__footer-links_div">
        <h4>Get in touch</h4>
        <p>Kor Doc</p>
        <p>8042568844</p>
        <p>info@kor-doc.com</p>
      </div>
    </div>

    <div className="kordoc__footer-copyright">
      <p>@2022 Kor Doc. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
