import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

  const Header = () => (
  <div className="kordoc__header section__padding" id="home">
    <div className="kordoc__header-content">
      <h1 className="gradient__text">Build with Kor Doc</h1>
      <p>Step by Step, No Elevator to Success</p>

      <div className="kordoc__header-content__input">
      <button type="submit" onClick={() => window.location.href="https://kordoc.github.io/formsubmit/"}>Contact Team</button>
    </div>

    <div className="kordoc__header-content__people">
      <img src={people} />
      <p>1,674 brands have requested access a visit in the last 24 hours</p>
    </div>
  </div>

  <div className="kordoc__header-image">
    <img src={ai} />
  </div>
  </div>
);

export default Header;