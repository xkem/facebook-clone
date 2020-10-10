import React from 'react';


const PostHeader = (props) => {
  return (
    <div>
      <div className="flex-grid post-comment" >
      <img className=" col thumb" src={require(`../images/profile.jpg`)}></img>
      <div className="col" >
          <div className="post-author">Poster Name</div>
          4h ago
      </div>
      </div>
    </div>
  );
}

export default PostHeader;
