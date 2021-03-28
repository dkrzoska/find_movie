import React from 'react';
import './MovieCard.scss';

function MovieCard({poster, title, year, type, imdbID, movieInfo}) {
    return (
        <div className='moviecard' onClick={() => {console.log(imdbID); movieInfo(imdbID)}}>
            <img src={poster}></img>
            <h2>{title}</h2>
            <h4>{year}, <span className='type'>{type}</span></h4>
        </div>
    )
}

export default MovieCard
