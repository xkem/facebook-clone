import React from 'react';



import Post from './Post'
import Stories from './Stories';
import NewPost from './PostNew';

const Posts = (props) => {
  return (
    <div class="col posts vh space-between">
      <Stories></Stories>
      <NewPost></NewPost>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  );
}

export default Posts;
