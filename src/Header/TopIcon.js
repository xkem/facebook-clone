import React from 'react';

import TopButton from '../Button/TopButton';

const TopIcon = (props) => {
  var icon_class = "col top-icon";

  if(props.selected){
    icon_class+=" icon-selected";
  }
  return (
          <div className={icon_class}>
              <TopButton icon_class={props.icon_class}></TopButton>
          </div>
  );
}

export default TopIcon;
