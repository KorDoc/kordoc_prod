import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="kordoc__blog-container_article">
    <div className="kordoc__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="kordoc__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p className="p__opensans" onClick={() => window.location.href="https://twitter.com/kordoc_"}>Read Full Article</p>
    </div>
  </div>
);

export default Article;