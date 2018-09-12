import React, { Component } from 'react';
import './styles/App.css';
import Pokemon from 'pokemontcgsdk';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import DashBoard from './components/DashBoard.js';
import Cards from './components/Cards.js';
import Decks from './components/Decks.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedDeck: null,
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <NavBar/>
            <Route
              exact path="/"
              component={DashBoard}
            />
            <Route
              path="/cards"
              component={Cards}/>
            <Route
              path="/decks"
              render={() => <Decks/>}
            />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
