import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post'
import Stories from './Stories';

const Posts = (props) => {
  return (
    <div class="col posts vh">
      <Stories></Stories>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  );
}

export default Posts;
