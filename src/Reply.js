import React from 'react';
import logo from './logo.svg';
import './App.css';

const Reply = (props) => {
  return (
    <div className="flex-grid post-comment" >
        <div className="col spacer" ></div>
        <div className="col post-comment-image" >
            <img className="thumb" src={require(`./square.png`)}></img>
        </div>
        <div className="col post-comment-content" >
            {'Lorem ipsum dolor sit amet'}
        </div>
    </div>
  );
}

export default Reply;
