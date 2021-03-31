import React from 'react';
import './MovieCard.scss';

function MovieCard({ poster, title, year, type, imdbID, movieInfo }) {
    return (
        <div className='moviecard' onClick={() => { movieInfo(imdbID) }}>
            <img alt='poster' src={poster}></img>
            <div className='moviecard__info'>
                <h2>{title}</h2>
                <h4>{year}, <span className='moviecard__info__type'>{type}</span></h4>
            </div>
        </div>
    )
}

export default MovieCard
