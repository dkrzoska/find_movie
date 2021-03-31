import React from 'react';
import './InfoCard.scss';

function InfoCard({ poster, showInfo, movieInfo, title, year, ratings, genre, actors, plot, imdbID }) {
    return (
        <div className='shadow' onClick={() => {showInfo(false); movieInfo(false)}}>
            <div className='infoCard'>
                <img alt='poster' src={poster} />
                <div className='infoCard__info'>
                    <h2>{title}</h2>
                    <h4>({year}), <span>{ratings}</span></h4>
                    <i>{genre}</i>
                    <p className='infoCard__info__stars'><strong>Stars:</strong> {actors}</p>
                    <p className='infoCard__info__storyline'><strong>Storyline:</strong> {plot}</p>
                    <p className='infoCard__info__imdbID'>{imdbID}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
