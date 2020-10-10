import React from 'react';



const PostReacts = (props) => {
  return (
    <div className="flex-grid align-centre" >
        <div className="post-reacts">
          <img  className='small-icon overlap' src={require(`../images/like.svg`)}></img>
          <img  className='small-icon overlap' src={require(`../images/love.svg`)}></img>
          <img  className='small-icon overlap' src={require(`../images/smile.svg`)}></img>
        </div>
        <div>
          Ronald MacDonald and 99 others
        </div>
    </div>
  );
}

export default PostReacts;
