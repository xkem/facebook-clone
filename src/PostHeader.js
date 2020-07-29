import React from 'react';
import './App.css';

const PostHeader = (props) => {
  return (
    <div>
      <div className="flex-grid post-comment" >
        <div className="col post-comment-image" >
            <img className="thumb" src={require(`./square.png`)}></img>
        </div>
        <div className="col post-comment-content" >
           Poster Name <br></br>
           4h ago
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
