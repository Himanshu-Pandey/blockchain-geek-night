import React from 'react';
import './App.css';
import BlockNumber from './Components/BlockNumber';
import NodesCounter from './Components/NodesCounter';
import AccountBalance from './Components/AccountBalance';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NodesCounter />
        <BlockNumber />
        <AccountBalance />
      </header>
    </div>
  );
}

export default App;
