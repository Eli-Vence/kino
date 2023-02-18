import React from 'react';
import PropTypes from 'prop-types';
import './main.css';

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className='card'>
      <div className='card-image waves-effect waves-block waves-light'>
        <img className='activator' src={poster} />
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {title}
        </span>
        <span className='card-title grey-text text-lighten-1'>{year}</span>
        <ul className='card-list grey-text text-darken-2'>
          {genres.map((genre) => {
            return <li>{genre}</li>;
          })}
        </ul>
        <p>{summary}</p>
      </div>
      <div className='card-reveal'></div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
