import React from 'react';
import PropTypes from 'prop-types';

const MovieListItem = ({ movie }) => {
  const posterPath = `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.poster_path}`;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="poster" src={ posterPath } alt={ movie.title } />
        </div>

        <div className="media-body">
          <div className="media-heading">
            { movie.title }
          </div>
          <div>
            { movie.overview }
          </div>
        </div>
      </div>
    </li>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.title,
    overview: PropTypes.string
  })
}

export default MovieListItem;
