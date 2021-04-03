import React from 'react'
import './App.scss';
import Nav from "./components/Nav";
import Main from "./components/Main";
import MusicControls from "./components/MusicControls";

const App =()=> {
  return (
      <div className="outerWrap">
        <div className="App">
          <Nav/>
          <Main/>
        </div>
        <MusicControls/>
      </div> /* outerWrap */
  );
}

export default App;
