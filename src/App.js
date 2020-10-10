import React from 'react';

import './css/App.css';

import Sidebar from './Sidebar'
import Posts from './Post/Posts'
import Header from './Header/Header';

function App() {
  return (
    <div>
      <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
      <Header></Header>
      <div class="flex-grid space-between">
        <Sidebar sidebar_id="left-sidebar"></Sidebar>
        <Posts></Posts>
        <Sidebar sidebar_id="right-sidebar"></Sidebar>
      </div>
    </div>
  );
}

export default App;
