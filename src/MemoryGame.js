import React, { Component } from 'react';
import './MemoryCard.css';
import shuffle from 'shuffle-array';
import Navbar from './components/Navbar';
import Card from './components/Card';

// * Create 3 CardStates - HIDDEN, VISIBLE, MATCHED

const CardState = {
  HIDDEN: 0, // can't see backgroundColor
  VISIBLE: 1, // can see backgroundColor
  MATCHED: 2 // matche, stay visible
};

export default class MemoryGame extends Component {
  constructor(props) {
    super(props);

    // * Create cards to use in state

    let cards = [
      { id: 0, cardState: CardState.HIDDEN, backgroundColor: tomato },
      { id: 1, cardState: CardState.HIDDEN, backgroundColor: tomato },
      { id: 2, cardState: CardState.HIDDEN, backgroundColor: salmon },
      { id: 3, cardState: CardState.HIDDEN, backgroundColor: salmon },
      { id: 4, cardState: CardState.HIDDEN, backgroundColor: cornflowerblue },
      { id: 5, cardState: CardState.HIDDEN, backgroundColor: cornflowerblue },
      { id: 6, cardState: CardState.HIDDEN, backgroundColor: darkcyan },
      { id: 7, cardState: CardState.HIDDEN, backgroundColor: darkcyan },
      { id: 8, cardState: CardState.HIDDEN, backgroundColor: darkseagreen },
      { id: 9, cardState: CardState.HIDDEN, backgroundColor: darkseagreen },
      { id: 10, cardState: CardState.HIDDEN, backgroundColor: darkslategrey },
      { id: 11, cardState: CardState.HIDDEN, backgroundColor: darkslategrey },
      { id: 12, cardState: CardState.HIDDEN, backgroundColor: deepskyblue },
      { id: 13, cardState: CardState.HIDDEN, backgroundColor: deepskyblue },
      { id: 14, cardState: CardState.HIDDEN, backgroundColor: gold },
      { id: 15, cardState: CardState.HIDDEN, backgroundColor: gold }
    ];
    cards = shuffle(cards);
    this.state = { cards, noClick: false };
  }

  render() {
    // Iterate over cards in state and return a Card component
    const cards = this.state.cards.map(card => <Card key={card.id} />);

    // return a Navbar + Cards
    return (
      <div>
        <Navbar />
        {cards}
      </div>
    );
  }
}
