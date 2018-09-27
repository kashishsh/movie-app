import React from 'react';
import MovieListItem from './MovieListItem';
import PropTypes from 'prop-types';

const MovieList = (props) => {
  if(!props.movies) return null;

  const movieItems = props.movies.map((movie) => {
    return <MovieListItem
      key={movie.id}
      movie={movie}
    />
  });
  return (
    <ul className="list-group">
      {movieItems}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array
}

export default MovieList;
