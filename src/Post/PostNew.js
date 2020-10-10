import React from 'react';


import PostActions from './PostActions';
import PostCommentBox from './CommentNew';
import Divider from '../Divider';

const PostNew = (props) => {
  return (
    <div className="island content-pad">
        <PostCommentBox></PostCommentBox>
        <Divider></Divider>
        <PostActions></PostActions>
    </div>
  );
}

export default PostNew;
