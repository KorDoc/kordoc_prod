import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import { TwitterTimelineEmbed, TwitterTweetEmbed, TwitterMomentShare } from 'react-twitter-embed';

import './blog.css';

const Blog = () => (
  <div className="kordoc__blog section__padding" id="blog">
    <div className="kordoc__blog-heading">
      <h1 className="gradient__text">The happening, <br /> Your plug to the source.</h1>
    </div>
    <div className="kordoc__blog-container">
      <div className="kordoc__blog-container_groupA">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="kordocnews"
        options={{height: 500}} />
      </div>
      <div className="kordoc__blog-container_groupB">
        <Article imgUrl={blog04} date="Sep 26, 2022" text="What is a QR code?: QR short for Quick Response code are a type of barcode image that can be scanned by a smartphone and store information." />
        <Article imgUrl={blog05} date="Sep 17, 2022" text="Take care filling out online forms: Inputting information over a non-secure (non-HTTPS) connection or on public Wi-Fi or a shared device can expose your private information." />
        <Article imgUrl={blog03} date="Sep 4, 2022" text="How to Advertise Online: 93% of all online interactions start with a search engine, you can catch the attention of the audience you want through online advertising." />
        <Article imgUrl={blog02} date="Apr 23, 2021" text="Many of the most valuable websites on the internet today are actually web applications. You may wonder: What’s the difference?" />
      </div>
    </div>
  </div>
);

export default Blog;