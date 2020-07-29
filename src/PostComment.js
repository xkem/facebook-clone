import React from 'react';
import './App.css';
import Reply from './Reply'

const PostComment = (props) => {
  return (
    <div>
      <div className="flex-grid post-comment" >
        <div className="col post-comment-image" >
            <img className="thumb" src={require(`./square.png`)}></img>
        </div>
        <div className="col post-comment-content" >
            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
                        culpa qui officia deserunt mollit anim id est laborum.'}
        </div>
      </div>
        <Reply></Reply>
        <Reply></Reply>
        <Reply></Reply>
      </div>
  );
}

export default PostComment;
