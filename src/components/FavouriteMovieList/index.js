import React, { Component } from 'react';

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth 1',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class FavouriteMovieList extends Component {

  findUser = (profile) => {
    for (let key in users) {
      if (users[key].id === parseInt(profile.userID, 10)) {
        return users[key];
      }
    }
  }

  findMovie = (profile) => {
    for (let key in movies) {
      if (movies[key].id === parseInt(profile.favoriteMovieID, 10)) {
        return movies[key];
      }
    }
  }

  favouriteMovieList = () => {
    return profiles.map(profile => {
      const user = this.findUser(profile);
      const favMovie = this.findMovie(profile);
      return <li key={profile.id}>{user.name}'s favorite movie is {favMovie.name}.</li>
    }
    )
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Lesson 3 - State Management</h1>

        </header>

        <h2>Excercise 1 - Passing Data</h2>
        <h3>Favourite Movie Lists</h3>
        <ul>
          {this.favouriteMovieList()}
        </ul>
      </div>
    );
  }
}

export default FavouriteMovieList;
