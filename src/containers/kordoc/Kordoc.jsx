import React from 'react';
import Feature from '../../components/feature/Feature';
import './kordoc.css';

const Kordoc = () => (
  <div className="kordoc__wkordoc section__margin" id="wkordoc">
    <div className="kordoc__wkordoc-feature">
      <Feature title="What is Kor Doc?" text="This movement pushes innovation while focusing on protecting our environment a step at a time. Innovation is tied to technology allowing us to customize to our desired path forward, Kor Doc helps integrate modern practices with a classic approach. Kor Doc has options that could lead to a community of others seemlessly exchanging information while promoting growth." />
    </div>
    <div className="kordoc__wkordoc-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p className="p__opensans"><a href="#features">Explore the Library</a></p>
    </div>
    <div className="kordoc__wkordoc-container">
      <Feature title="Innovation" text="If you do not know, you will learn it" />
      <Feature title="Profit from Self-Promotion" text="One attempt starts brand growth" />
    </div>
  </div>
);

export default Kordoc;
