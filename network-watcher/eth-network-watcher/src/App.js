import React from 'react';
import './App.css';
import BlockNumber from './Components/BlockNumber';
import NodesCounter from './Components/NodesCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NodesCounter />
        <BlockNumber />
      </header>
    </div>
  );
}

export default App;
