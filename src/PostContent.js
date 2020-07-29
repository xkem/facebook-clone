import React from 'react';
import './App.css';

const PostContent = (props) => {
  return (
    <div className="col post-content" >
      <div className="col post-text" >
      {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
                    culpa qui officia deserunt mollit anim id est laborum.'}
      </div>
      <div className="col post-image" >
        <img  src={require(`./square.png`)}></img>
      </div>
    </div>
  );
}

export default PostContent;
