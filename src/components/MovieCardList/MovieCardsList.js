import React from 'react';
import MovieCard from './MovieCard';

const MovieCardsList = props => {
  const { profiles, movies, users } = props;

  //console.log(profiles);

  const usersByMovie = {};

  profiles.forEach(profile => {
    const movieID = profile.favoriteMovieID;
    const userID = profile.userID;

    //console.log('movieID', movieID); //1 //1
    //console.log('userID', userID); //1 //2

    if (!usersByMovie[movieID]) {
      usersByMovie[movieID] = [userID]; // 1: [1]
      //console.log('ma shi yin', usersByMovie);
    } else {
      usersByMovie[movieID].push(userID); // 1: [1, 2]
      //console.log('shi yin', usersByMovie);
    }
  });

  //console.log('usermove', usersByMovie[1]);
  //console.log(movies[1]);

  const movieCards = Object.keys(movies).map(id => (
    <MovieCard
      key={id}
      users={users}
      movieInfo={movies[id]}
      usersWhoLikedMovie={usersByMovie[id]}
    />
  ));
  return (
    <>
      <div>
        <ul>{movieCards}</ul>
      </div>
    </>
  );
};

export default MovieCardsList;
