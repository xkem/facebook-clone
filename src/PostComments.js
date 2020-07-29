import React from 'react';
import './App.css';
import PostComment from './PostComment';
import PostCommentBox from './PostCommentBox';

const PostComments = (props) => {
  return (
    <div className="col post-comments" >
      <PostCommentBox></PostCommentBox>
      <PostComment></PostComment>
      <PostComment></PostComment>
    </div>
  );
}

export default PostComments;
