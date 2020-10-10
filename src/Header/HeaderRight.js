import React from 'react';

const HeaderRight = (props) => {
  return (
    <div className="col" >
        <div class="flex-grid header-right">
            <img className=" col thumb-comment" src={require(`../images/profile.jpg`)}></img>
            <img className=" col thumb-comment" src={require(`../images/profile.jpg`)}></img>
            <img className=" col thumb-comment" src={require(`../images/profile.jpg`)}></img>
            <img className=" col thumb-comment" src={require(`../images/profile.jpg`)}></img>
        </div>
    </div>
  );
}

export default HeaderRight;
