import React from 'react';
import logo from './logo.svg';
import './App.css';

const Sidebutton = (props) => {
  return (
        <div class="flex-grid">
          <div class="col side-button">
            <img  className='thumb' src={require(`./square.png`)}></img>
            Group/User
          </div>
        </div>
  );
}

export default Sidebutton;
