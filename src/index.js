import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Header from './components/Header';
import App from './components/App';
import Jokes from './components/Jokes';

import MusicMaker from './projects/music-maker';
import OddsOrEvens from './projects/odds-or-evens';
import Reaction from './projects/reaction';

import './index.css';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" render={() => <Header><App /></Header>} />
      <Route path="/jokes" render={() => <Header><Jokes /></Header>} />
      <Route path="/music-maker" render={() => <Header><MusicMaker /></Header>} />
      <Route path="/odds-or-evens" render={() => <Header><OddsOrEvens /></Header>} />
      <Route path="/reaction" render={() => <Header><Reaction /></Header>} />
    </Switch>
  </Router>,
  document.getElementById('root')
);