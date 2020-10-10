import React from 'react';

import './Button.css';

const IconButton = (props) => {
  return (
    <div class="button">
        <i class={props.icon_class}></i>{props.text}
    </div>
  );
}

export default IconButton;
