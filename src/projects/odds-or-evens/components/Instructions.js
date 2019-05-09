import React from 'react';
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';

const Instructions = props => {
  const { instructionsExpanded, expandInstructions, collapseInstructions } = props;

  if (instructionsExpanded) {
    return (
      <div>
        <h3>Instructions</h3>
        <p>Welcome to Odds or Evens. This is how to play: </p>
        <p>The deck is shuffled. Choose a card: Will it be Odd or Even?</p>
        <p>Have a guess at each draw and see how many you get right!</p>
        <p>(Face cards do not count)</p>
        <br/>
        <button onClick={collapseInstructions}>Show Less</button>
      </div>
    )
  }
  return (
    <div>
      <h3>Instructions</h3>
      <p>Welcome to Odds or Evens. This is how to play... </p>
      <button onClick={expandInstructions}>Read More</button>
    </div>
  )
}

export default connect(
  state => ({ instructionsExpanded: state.settings.instructionsExpanded }), 
  { expandInstructions, collapseInstructions }
)(Instructions);