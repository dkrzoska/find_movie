import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';

function SearchEngine() {
    const API_KEY = 'f4c07afc';
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState('');
    const [page, setPage] = useState(1);

    const handleSetQuestion = (el) => {
        setQuestion(el)
    }

    useEffect(() => {
        fetchAllFindedMovies()
    }, [question]);

    const fetchAllFindedMovies = () => {
        // setLoading(true);
        // setError(null);
        // setData(null);

        fetch(`http://www.omdbapi.com/?s=${question}&page=${page}&plot=full&apikey=${API_KEY}`)
            .then(resp => resp.json())
            .then(data => {
                if (data.Response === 'False') {
                    setError(data.Error);
                }
                else {
                    setData(data.Search);
                }
                console.log(data);
                console.log(data.totalResults);
                // setLoading(false);
            })
            .catch(({ message }) => {
                setError(message);
                // setLoading(false);
            })
    }

    return (<>
        <SearchForm question={handleSetQuestion} />
        <div>
            {!data && <p>'Brak wyników'</p>}
            {
                data && data.map((dt, i) => { return <p key={i}>{dt.Title}</p> })
            }
        </div>
    </>)
}

export default SearchEngine
