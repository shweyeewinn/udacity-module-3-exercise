import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import MovieCardsList from './components/MovieCardList';
import RandomNumbersGame from './components/Game';
import ShoppingList from './components/ShoppingList';
import FavouriteMovieList from './components/FavouriteMovieList';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/shoppinglist" component={ShoppingList} />
          <Route path="/randomnumbergame" component={RandomNumbersGame} />
          <Route path="/favouritemovies" component={FavouriteMovieList} />
          <Route path="/moviecardlist" component={MovieCardsList} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
