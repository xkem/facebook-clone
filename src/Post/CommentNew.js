import React from 'react';

const CommentNew = (props) => {
  return (
    <div>
      <div className="flex-grid post-comment-box" >
        <img className="col thumb-comment" src={require(`../images/profile.jpg`)}></img>
        <div className="col comment-input-container" type='text'>
          <div className="comment-input" contentEditable="true">What's on your mind?....</div>
          <div className='col noml input-icons'>
            <i class="las la-smile"></i>
            <i class="las la-image"></i>
            <i class="las la-sticky-note"></i>
          </div>
        </div>
      </div>
    </div>

  );
}

export default CommentNew;
