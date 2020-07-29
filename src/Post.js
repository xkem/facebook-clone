import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './PostComment'
import PostReacts from './PostReacts';
import PostActions from './PostActions';
import PostContent from './PostContent';
import PostCommentBox from './PostCommentBox';
import PostComments from './PostComments';
import PostHeader from './PostHeader';

const Post = (props) => {
  return (
    <div className="col post" >
      <PostHeader></PostHeader>
      <PostContent></PostContent>
      <PostReacts></PostReacts>
      <PostActions></PostActions>
      <PostComments></PostComments>      
    </div>
  );
}

export default Post;
