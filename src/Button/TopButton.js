
import React from 'react';

import './Button.css';

const TopButton = (props) => {
  return (
    <div class="button">
        <i class={props.icon_class}></i>
    </div>
  );
}

export default TopButton;


