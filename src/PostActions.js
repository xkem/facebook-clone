import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './PostComment'

const PostActions = (props) => {
  return (
    <div className="flex-grid post-actions" >
      <div className="col" >
        Like
      </div>
      <div className="col" >
        Comment 
      </div>
      <div className="col" >
        Share
      </div>
    </div>
  );
}

export default PostActions;
