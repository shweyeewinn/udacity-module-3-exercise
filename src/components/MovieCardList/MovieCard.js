import React from 'react';

const MovieCard = props => {
  const { users, movieInfo, usersWhoLikedMovie } = props;

  //   console.log('movie', movieInfo);
  //console.log('like', usersWhoLikedMovie);
  //console.log('users', users);

  return (
    <>
      <li>
        <h2>{movieInfo.name}</h2>
        <h3>Liked By:</h3>
        {!usersWhoLikedMovie || usersWhoLikedMovie.length === 0 ? (
          <p>None of the current users favourited this movie.</p>
        ) : (
            <ul>
              {usersWhoLikedMovie &&
                usersWhoLikedMovie.map(userId => {
                  return (
                    <li key={userId}>
                      <p>{users[userId].name}</p>
                    </li>
                  );
                })}
            </ul>
          )}
      </li>
    </>
  );
};

export default MovieCard;
