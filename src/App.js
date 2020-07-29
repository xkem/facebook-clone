import React from 'react';
import './App.css';
import Sidebar from './Sidebar'
import Posts from './Posts'
import Stories from './Stories'

function App() {
  return (
    <div>
      <div class="flex-grid header">
        <div class="logo">
          <img className="thumb" src={require(`./square.png`)}></img>
        </div>
        <div class="col">Some Content</div>
      </div>

      <div class="flex-grid">
        <Sidebar></Sidebar>
        <Posts></Posts>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
