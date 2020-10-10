import React from 'react';

import PostComment from './Comment';
import CommentNew from './CommentNew';

const PostComments = (props) => {
  return (
    <div className="post-comments content-pad" >
      <CommentNew></CommentNew>
      <PostComment></PostComment>
      <PostComment></PostComment>
    </div>
  );
}

export default PostComments;
