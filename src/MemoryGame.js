import React, { Component } from 'react';
import './MemoryGame.css';
import shuffle from 'shuffle-array';
import Navbar from './components/Navbar';
import Card from './components/Card';

// * Create 3 CardStates - HIDDEN, VISIBLE, MATCHED

const CardState = {
  HIDDEN: 0,
  VISIBLE: 1,
  MATCHED: 2
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
    this.state = { cards, noClick: false, score: 0 };

    this.handleClick = this.handleClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleClick(id) {
    // ! Function that maps through cards and if card matches
    // ! an ID to change, new state is given
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(card => {
        if (idsToChange.includes(card.id)) {
          return {
            ...card,
            cardState: newCardState
          };
        }
        return card;
      });
    };

    // ! Function to find card that we want out of the array
    const foundCard = this.state.cards.find(card => card.id === id);

    // ! If clicked card is visible or matched, return
    if (this.state.noClick || foundCard.cardState !== CardState.HIDDEN) return;

    // ! If true, player can't click
    let noClick = false;

    // ! Map through cards by the click ID and change CardState of matched card to visible
    let cards = mapCardState(this.state.cards, [id], CardState.VISIBLE);

    // ! Filter cards array to return only visible cards
    const visibleCards = cards.filter(
      card => card.cardState === CardState.VISIBLE
    );

    // ! Get IDs of showing cards
    const ids = visibleCards.map(card => card.id);

    // * MATCHING LOGIC
    // ! Check if two cards visible and if they match
    if (
      visibleCards.length === 2 &&
      visibleCards[0].backgroundImage === visibleCards[1].backgroundImage
    ) {
      // ! IF they match, map through the visible cards and change their state to MATCHED
      cards = mapCardState(cards, ids, CardState.MATCHED);
      let score = this.state.score + 2;
      this.setState({ score });
    } else if (visibleCards.length === 2) {
      // ! change to hiding if they don't match;
      let hiddenCards = mapCardState(cards, ids, CardState.HIDDEN);
      noClick = true;

      // ! Set state to keep two cards showing...
      this.setState({ cards, noClick }, () => {
        setTimeout(() => {
          // ! ...then set the state of the cards to HIDDEN after 1.3 seconds
          this.setState({ cards: hiddenCards, noClick: false });
        }, 1300);
      });
      return;
    }

    // ! This line will be reached if there's only one card showing
    this.setState({ cards, noClick });
  }

  handleNewGame() {
    // ! 1. Copy the state and set all the cards to HIDDEN
    let cards = this.state.cards.map(card => ({
      ...card,
      cardState: CardState.HIDDEN
    }));
    // ! 2. Shuffle Cards
    cards = shuffle(cards);
    // ! 3. Set as new state.
    this.setState({ cards });
  }

  render() {
    // * Iterate over cards in state and return a Card component
    const cards = this.state.cards.map(card => (
      <Card
        key={card.id}
        // ! visible only true if not equal to HIDDEN
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
        <Navbar onNewGame={this.handleNewGame} score={this.state.score} />
        <div className='game-wrapper'>{cards}</div>
      </div>
    );
  }
}
