import React from 'react';
import IconButton from '../Button/IconButton';


const PostActions = (props) => {
  return (
    <div className="flex-grid actions" >
      <div className="col action" >
        <IconButton icon_class="las la-thumbs-up" text="Like"></IconButton>
      </div>
      <div className="col action" >
        <IconButton icon_class="las la-comment-alt" text="Comment"></IconButton>
      </div>
      <div className="col action" >
        <IconButton icon_class="las la-share" text="Share"></IconButton>
      </div>
    </div>
  );
}

export default PostActions;
