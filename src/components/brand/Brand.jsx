import React from 'react';
import './brand.css';

import { images } from '../../constants';

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={images.google} alt="google" />
      </div>
      <div>
        <img src={images.slack} alt="slack" />
      </div>
      <div>
        <img src={images.atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={images.dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={images.shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand