import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard';


class App extends Component {
  constructor(){
    super()
    this.deck = [];
    this.pickedCards[];
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Memory Game
          </h1>
          <h5 className='App-subtitle'>
            Match cards to win
          </h5>
        </header>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
      </div>
    );
  }
}

export default App;
