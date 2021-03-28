import React from 'react';
import './InfoCard.scss';

function InfoCard({ poster, showInfo, movieInfo, title, year, genre, actors, plot, imdbID }) {
    return (
        <div className='shadow' onClick={() => {showInfo(false); movieInfo(false)}}>
            <div className='infoCard'>
                <img src={poster} />
                <div className='info'>
                    <h2>{title}</h2>
                    <h4>({year})</h4>
                    <p>{genre}</p>
                    <p>Stars: {actors}</p>
                    <p>Storyline: {plot}</p>
                    <p>{imdbID}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
