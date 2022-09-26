import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData= [
  {
    title: 'QR Code',
    text: 'Smart routing with SmartPhone',
  },
  {
    title: 'WebApp',
    text: 'User Interface Service',
  },
  {
    title: 'Ad Service',
    text: 'Modern Advertising',
  },
  {
    title: 'Street Team',
    text: 'Earn a Customer',
  },
  {
    title: 'Sticker',
    text: 'Call of Action',
  },
  {
    title: 'TShirt',
    text: 'Brand Outreach',
  },
];

const Features = () => (
  <div className="kordoc__features section__padding" id="features">
    <div className="kordoc__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. Let's Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="kordoc__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;