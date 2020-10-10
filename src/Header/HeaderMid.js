import React from 'react';

import './TopIcons.css';
import TopIcon from './TopIcon';

const HeaderMid = (props) => {
  return (
    <div className="col flex-grid top-icons">
        <TopIcon selected="true" icon_class="las la-home"></TopIcon>
        <TopIcon icon_class="las la-play"></TopIcon>
        <TopIcon icon_class="las la-store"></TopIcon>
        <TopIcon icon_class="las la-users"></TopIcon>
        <TopIcon icon_class="las la-gamepad"></TopIcon>
    </div>
  );
}

export default HeaderMid;
