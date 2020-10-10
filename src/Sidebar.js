import React from 'react';



import Sidebutton from './Button/Sidebutton';
import Divider from './Divider';

const Sidebar = (props) => {
  return (
      <div id={props.sidebar_id }class="vh sidebar">
        <Sidebutton></Sidebutton>
        <Sidebutton></Sidebutton>
        <Sidebutton></Sidebutton>
        <Sidebutton></Sidebutton>
        <Divider></Divider>
        <Sidebutton></Sidebutton>
        <Sidebutton></Sidebutton>
        <Sidebutton></Sidebutton>
        <Sidebutton></Sidebutton>
      </div>
  );
}

export default Sidebar;
