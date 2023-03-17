import React from 'react';

import { Article } from '../../components';
import { images } from '../../constants';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={images.blog01} date="Jan 30, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={images.blog02} date="Jan 30, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={images.blog03} date="Jan 30, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={images.blog04} date="Jan 30, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={images.blog05} date="Jan 30, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog