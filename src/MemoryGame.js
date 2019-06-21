import React, { Component } from 'react';
import './MemoryGame.css';
import shuffle from 'shuffle-array';
import Navbar from './components/Navbar';
import Card from './components/Card';

// * Create 3 CardStates - HIDDEN, VISIBLE, MATCHED

const CardState = {
  HIDDEN: 0, // can't see backgroundImage
  VISIBLE: 1, // can see backgroundImage
  MATCHED: 2 // matched, stay visible
};

export default class MemoryGame extends Component {
  constructor(props) {
    super(props);

    // * Create cards to use in state

    let cards = [
      {
        id: 0,
        cardState: CardState.HIDDEN,
        backgroundImage: 'linear-gradient(180deg, #FC466B 0%, #3F5EFB 100%)'
      },
      {
        id: 1,
        cardState: CardState.HIDDEN,
        backgroundImage: 'linear-gradient(180deg, #FC466B 0%, #3F5EFB 100%)'
      },
      {
        id: 2,
        cardState: CardState.HIDDEN,
        backgroundImage: 'linear-gradient(180deg, #d53369 0%, #daae51 100%)'
      },
      {
        id: 3,
        cardState: CardState.HIDDEN,
        backgroundImage: 'linear-gradient(180deg, #d53369 0%, #daae51 100%)'
      },
      {
        id: 4,
        cardState: CardState.HIDDEN,
        backgroundImage: 'linear-gradient(180deg, #0700b8 0%, #00ff88 100%)'
      },
      {
        id: 5,
        cardState: CardState.HIDDEN,
        backgroundImage: 'linear-gradient(180deg, #0700b8 0%, #00ff88 100%)'
      },
      {
        id: 6,
        cardState: CardState.HIDDEN,
        backgroundImage: 'linear-gradient(180deg, #00C9FF 0%, #92FE9D 100%)'
      },
      {
        id: 7,
        cardState: CardState.HIDDEN,
        backgroundImage: 'linear-gradient(180deg, #00C9FF 0%, #92FE9D 100%)'
      },
      {
        id: 8,
        cardState: CardState.HIDDEN,
        backgroundImage: 'linear-gradient(180deg, #9ebd13 0%, #008552 100%)'
      },
      {
        id: 9,
        cardState: CardState.HIDDEN,
        backgroundImage: 'linear-gradient(180deg, #9ebd13 0%, #008552 100%)'
      },
      {
        id: 10,
        cardState: CardState.HIDDEN,
        backgroundImage: 'linear-gradient(180deg, #3F2B96 0%, #A8C0FF 100%)'
      },
      {
        id: 11,
        cardState: CardState.HIDDEN,
        backgroundImage: 'linear-gradient(180deg, #3F2B96 0%, #A8C0FF 100%)'
      },
      {
        id: 12,
        cardState: CardState.HIDDEN,
        backgroundImage: 'linear-gradient(180deg, #fcff9e 0%, #c67700 100%)'
      },
      {
        id: 13,
        cardState: CardState.HIDDEN,
        backgroundImage: 'linear-gradient(180deg, #fcff9e 0%, #c67700 100%)'
      },
      {
        id: 14,
        cardState: CardState.HIDDEN,
        backgroundImage: 'linear-gradient(180deg, #1CB5E0 0%, #000851 100%)'
      },
      {
        id: 15,
        cardState: CardState.HIDDEN,
        backgroundImage: 'linear-gradient(180deg, #1CB5E0 0%, #000851 100%)'
      }
    ];
    cards = shuffle(cards);
    this.state = { cards, noClick: false };

    this.handleClick = this.handleClick.bind(this);
  }

  // ! Takes ID of card that was clicked, so we know which one to modify in the state array
  handleClick(id) {
    this.setState(prevState => {
      // ! Map through each card
      let cards = prevState.cards.map(card =>
        // ! If ID's match... Change the set from hidden to matched, or matched to hidden
        card.id === id
          ? {
              ...card,

              cardState:
                card.cardState === CardState.HIDDEN
                  ? CardState.MATCHED
                  : CardState.HIDDEN
            }
          : // ! If ID's don't match... return card as-is
            card
      );
      return { cards };
    });
  }

  render() {
    // * Iterate over cards in state and return a Card component
    const cards = this.state.cards.map(card => (
      <Card
        key={card.id}
        // ! Only show card if not equal to HIDDEN
        visible={card.cardState !== CardState.HIDDEN}
        backgroundImage={card.backgroundImage}
        onClick={() => {
          this.handleClick(card.id);
        }}
      />
    ));

    // * return a Navbar + Cards
    return (
      <div>
        <Navbar />
        {cards}
      </div>
    );
  }
}
