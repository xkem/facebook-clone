import React from 'react';



const Reply = (props) => {
  return (
    <div className="flex-grid post-comment" >
        <div className="col spacer" ></div>
        <img className="col thumb-reply" src={require(`../images/profile.jpg`)}></img>
        <div className="col " >
          <div className="post-comment-content">
            <div className="post-author">Poster Name</div>
            {'Lorem ipsum dolor sit amet'}
          </div>
          <div className="comment-react">
            Like<span className="period">·</span>
            Reply<span className="period">·</span>
            1 m
          </div>
        </div>
    </div>
  );
}

export default Reply;
