import React, {useEffect, useState} from 'react';
import './SearchForm.scss';

function SearchForm({question}) {

const [searchFraze, setSearchFraze] = useState('');

const handleChangeSearchFraze = (ev) => {
    setSearchFraze(ev.target.value);
}

const sendSearchData = (ev) => {
    ev.preventDefault();
    // const searchData = searchFraze;
    question(searchFraze);
}

useEffect(() => {

});

    return (
        <div className='searchform'>
            <form onSubmit = {sendSearchData}>
                <p>Search</p>
                <p><input onChange={handleChangeSearchFraze} value={searchFraze}></input></p>
                <button>Szukaj</button>
            </form>
        </div>
    )
}

export default SearchForm
