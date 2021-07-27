import React from 'react';
import './App.css';
import MatrixBoard from './components/MatrixBoard';

function App() {
  return (
    <div>
      <div className="head">
      <h1>Mine-sweeper Game</h1>
      </div>
      <div className="placing">   
        <MatrixBoard/>
      </div>
    </div>
  );
}

export default App;
