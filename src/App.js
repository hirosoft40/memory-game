import React, { Component } from "react";
import "./App.css";
import MemoryCard from "./MemoryCard.js";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateDeck() {
  let symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
  let deck = [];
  // let pickedCards = [];

  for (let i = 0; i < 16; i++) {
    deck.push({ isFlipped: false, symbol: symbols[i % 8] });
  }
  shuffle(deck);
  return deck;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    };
  }

  pickCard(cardIndex) {
    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    if (this.state.deck[cardIndex].isFlipped) return;

    let cardToFlip = { ...this.state.deck[cardIndex] };
    cardToFlip.isFlipped = true;

    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) return cardToFlip;
      return { ...card };
    });

    if (newPickedCards.length === 2) {
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];
      let card1 = newDeck[card1Index];
      let card2 = newDeck[card2Index];

      if (card1Index.symbol !== card2Index.symbol) {
        setTimeout(() => {
          this.unflipCards(card1Index, card2Index);
        }, 1000);
      }
      newPickedCards = [];
    }

    this.setState({ deck: newDeck, pickedCards: newPickedCards });
  }

  unflipCards(card1Index, card2Index) {
    let newDeck = this.state.deck.map(card => {
      return { ...card };
    });
    newDeck[card1Index].isFlipped = false;
    newDeck[card2Index].isFlipped = false;

    this.setState({ deck: newDeck });
  }

  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return (
        <MemoryCard
          key={index}
          symbol={card.symbol}
          isFlipped={card.isFlipped}
          pickCard={this.pickCard.bind(this, index)}
        />
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h5 className="App-subtitle">Match cards to win</h5>
        </header>
        <div>{cardsJSX.slice(0, 4)}</div>
        <div>{cardsJSX.slice(4, 8)}</div>
        <div>{cardsJSX.slice(8, 12)}</div>
        <div>{cardsJSX.slice(12, 16)}</div>
      </div>
    );
  }
}

export default App;
