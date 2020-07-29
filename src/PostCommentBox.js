import React from 'react';
import './App.css';
import Reply from './Reply'

const PostCommentBox = (props) => {
  return (
    <div>
      <div className="flex-grid post-comment-box" >
        <div className="col post-comment-image" >
            <img className="thumb" src={require(`./square.png`)}></img>
        </div>
        <div className="col post-comment-content" >
           <input type='text'></input>
        </div>
      </div>
    </div>

  );
}

export default PostCommentBox;
