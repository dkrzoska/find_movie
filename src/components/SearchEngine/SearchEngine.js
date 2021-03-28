import React, { useState, useEffect } from 'react';
import './SearchEngine.scss';
import SearchForm from '../SearchForm/SearchForm';
import MovieCard from '../MovieCard/MovieCard';
import InfoCard from '../InfoCard/InfoCard';

function SearchEngine() {
    const API_KEY = 'f4c07afc';
    const [data, setData] = useState(false);
    const [question, setQuestion] = useState('');
    const [page, setPage] = useState('');
    const [arrayPages, setArrayPages] = useState([1]);
    const [showMovieInfo, setShowMovieInfo] = useState(false);
    const [movieInfo, setMovieInfo] = useState(false);

    const handleSetQuestion = (q) => {
        setQuestion(q);
        setPage('');
        fetchAllFindedMovies();
    }

    const handleChangePage = (ev) => {
        ev.preventDefault();
        setPage(ev.target.value);
        // console.log('jest');
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
        fetch(`http://www.omdbapi.com/?s=${question}&page=${page}&plot=full&apikey=${API_KEY}`)
            .then(resp => resp.json())
            .then(resp2 => {
                setData(resp2.Search);
                generatePages(resp2);
                console.log(resp2);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const fetchOneMovie = (imdbID) => {
        fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
            .then(resp => resp.json())
            .then(resp2 => {
                setMovieInfo(resp2);
                console.log(resp2);
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
                {showMovieInfo && <InfoCard
                    poster={movieInfo.Poster}
                    showInfo = {setShowMovieInfo}
                    movieInfo={setMovieInfo}
                    title={movieInfo.Title}
                    year={movieInfo.Year}
                    genre={movieInfo.Genre}
                    actors={movieInfo.Actors}
                    plot={movieInfo.Plot}
                    imdbID={movieInfo.imdbID}
                />}
            </div>
            <div className='pagesList'>
                {
                    data && arrayPages.map((dt, i) => <button onClick={handleChangePage} key={i} value={i + 1}>{dt}</button>)
                }
            </div>
        </>)
}

export default SearchEngine
