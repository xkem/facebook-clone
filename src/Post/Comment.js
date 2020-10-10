import React from 'react';

import Reply from './Reply'

const Comment = (props) => {
  return (
    <div>
      <div className="flex-grid post-comment" >
        <img className=" col thumb-comment" src={require(`../images/profile.jpg`)}></img>
        <div className="col" >
          <div className="post-comment-content">
            <div className="post-author">Poster Name</div>
              {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
                          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
                          culpa qui officia deserunt mollit anim id est laborum.'}
            </div>
            <div className="comment-react">
              Like<span className="period">·</span>
              Reply<span className="period">·</span>
              1 m
            </div>
        </div>
        
      </div>
        <Reply></Reply>
        <Reply></Reply>
        <Reply></Reply>
      </div>
  );
}

export default Comment;
