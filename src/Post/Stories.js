import React from 'react';



const Stories = (props) => {
  return (
    <div class="flex-grid">
        <div class="col story">
            <img className ="col-width" src={require(`../images/profile.jpg`)}></img>
        </div>
        <div class="col story">
            <img className ="col-width" src={require(`../images/profile.jpg`)}></img>
        </div>
        <div class="col story">
            <img className ="col-width" src={require(`../images/profile.jpg`)}></img>
        </div>
        <div class="col story">
            <img className ="col-width" src={require(`../images/profile.jpg`)}></img>
        </div>
        <div class="col story">
            <img className ="col-width" src={require(`../images/profile.jpg`)}></img>
        </div>
    

    </div>
  );
}

export default Stories;