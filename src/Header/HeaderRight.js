import React from 'react';

const HeaderRight = (props) => {
  return (
    <div className="col flex-grid align-centre end">
        <div class="flex-grid header-right align-centre">  
            <div className="flex-grid align-centre">
              <div className="current-user flex-grid align-centre">
                <img className="col thumb-comment" src={require(`../images/profile.jpg`)}></img>
                <div className="col">Matthew</div>
              </div>
              <div className="icon-circle"><i class="las la-plus"></i></div>
              <div className="icon-circle"><i class="las la-comment-alt"></i></div>
              <div className="icon-circle"><i class="las la-bell"></i></div>
              <div className="icon-circle"><i class="las la-chevron-down"></i></div>
            </div>
        </div>
    </div>
  );
}

export default HeaderRight;
