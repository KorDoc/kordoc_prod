import React from 'react';
import { google, slack, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="kordoc__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;
