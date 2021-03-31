import React, { useState, useEffect } from 'react';
import './SearchEngine.scss';
import SearchForm from '../SearchForm/SearchForm';
import MovieCard from '../MovieCard/MovieCard';
import InfoCard from '../InfoCard/InfoCard';
import PagesList from '../PagesList/PagesList';

function SearchEngine() {
    const API_KEY = 'f4c07afc';
    const [data, setData] = useState(false);
    const [question, setQuestion] = useState('');
    const [page, setPage] = useState('');
    const [arrayPages, setArrayPages] = useState([1]);
    const [showMovieInfo, setShowMovieInfo] = useState(false);
    const [movieInfo, setMovieInfo] = useState(false);
    const [position, setPosition] = useState(0);

    const next = () => {
        let newPosition = position;
        if (newPosition < arrayPages.length - 1) {
            newPosition++;
            setPosition(newPosition);
        }
        // console.log('position next= ' + newPosition);
    }
    const previous = () => {
        let newPosition = position;
        if (newPosition > 0) {
            newPosition--;
            setPosition(newPosition);
        }
        // console.log('position previous= ' + newPosition);
    }

    const handleSetQuestion = (q) => {
        setQuestion(q);
        setPage('');
        fetchAllFindedMovies();
    }

    const handleChangePage = (ev) => {
        ev.preventDefault();
        setPage(ev.target.value);
        setPosition(ev.target.value - 1);
    }

    const generatePages = (data2) => {
        let pages = [];
        for (let i = 1; i <= (data2.totalResults / 10 + 1); i++) {
            pages.push(i);
            // console.log(i);
        }
        // console.log(pages);
        setArrayPages(pages);
    }

    const fetchAllFindedMovies = () => {
        fetch(`https://www.omdbapi.com/?s=${question}&page=${page}&plot=full&apikey=${API_KEY}`)
            .then(resp => resp.json())
            .then(resp2 => {
                setData(resp2.Search);
                generatePages(resp2);
                // console.log(resp2);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const fetchOneMovie = (imdbID) => {
        fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
            .then(resp => resp.json())
            .then(resp2 => {
                setMovieInfo(resp2);
                // console.log(resp2);
                // console.log(resp2.Ratings[0].Value);
            })
            .catch((err) => {
                console.log(err);
            });
        setShowMovieInfo(true);
    }

    useEffect(() => {
        fetchAllFindedMovies();
    }, [question, page]);

    return (
        <>
            <SearchForm question={handleSetQuestion} />
            <div className='results'>
                {!data && <p>'Brak wyników'</p>}
                {
                    data && data.map((dt, i) => <MovieCard
                        key={i}
                        poster={dt.Poster}
                        title={dt.Title}
                        year={dt.Year}
                        type={dt.Type}
                        imdbID={dt.imdbID}
                        movieInfo={fetchOneMovie}
                    />
                    )
                    // data && data.map((dt, i) => <p key={i}>{dt.Title}</p>)
                }

            </div>
            {
                data && <PagesList
                    arrayPages={arrayPages}
                    position={position}
                    handleChangePage={handleChangePage}
                    previous={previous}
                    next={next}
                />
            }
            {showMovieInfo && <InfoCard
                poster={movieInfo.Poster}
                showInfo={setShowMovieInfo}
                movieInfo={setMovieInfo}
                title={movieInfo.Title}
                year={movieInfo.Year}
                ratings={movieInfo.imdbRating}
                genre={movieInfo.Genre}
                actors={movieInfo.Actors}
                plot={movieInfo.Plot}
                imdbID={movieInfo.imdbID}
            />}
        </>)
}

export default SearchEngine
