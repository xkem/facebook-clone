import React from 'react';

const HeaderLeft = (props) => {
  return (
    <div className="col" >
        <div class="flex-grid align-centre">
                <img  className='thumb col' src={require(`../images/profile.jpg`)}></img>
                <div className='comment-input-container input-top'>
                  <icon className="las la-search"></icon>
                </div>
        </div>
    </div>
  );
}

export default HeaderLeft;
