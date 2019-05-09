import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import fetchStates from '../reducers/fetchStates';
import Instructions from './Instructions';
import DrawCard from './DrawCard';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState';

class App extends Component {
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  }

  render() {

    if (this.props.fetchState === fetchStates.error) {
      return (
        <div>
          <p>Please try reloading the App. An Error occurred!</p>
          <p>{this.props.message}</p>
        </div>
      )
    }

    return (
      <div>
        <h2>♥️ ♠️  Odds or Evens  ♦️ ♣️</h2>
        {
          this.props.gameStarted ? (
            <div>
              <h3>Game On 🏁</h3>
              <GameState />
              <br />
              <Guess />
              <br />
              <DrawCard />
              <hr/>
              <Card />
              <hr />
              <button onClick={this.props.cancelGame}>Cancel Game</button>
            </div>
          ) : (
            <div>
              <h3>Start a new Game!</h3>
              <br />
              <button onClick={this.startGame}>Start Game</button>
              <hr />
              <Instructions />
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    settings: { gameStarted },
    deck: { fetchState, message }
  } = state;

  return { gameStarted, fetchState, message };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()),
//     cancelGame: () => dispatch(cancelGame()),
//     fetchNewDeck: () => dispatch(fetchNewDeck())
//   };
// }

const componentConnector = connect(
  mapStateToProps, 
  { startGame, cancelGame, fetchNewDeck }
);

export default componentConnector(App);