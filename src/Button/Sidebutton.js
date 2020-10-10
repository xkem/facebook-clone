import React from 'react';

const Sidebutton = (props) => {
  return (
        <div class="flex-grid">
          <div class="col side-button">
            <img  className='side-icon' src={require(`../images/profile.jpg`)}></img>
            <div>
              Group/User
            </div>
          </div>
        </div>
  );
}

export default Sidebutton;
