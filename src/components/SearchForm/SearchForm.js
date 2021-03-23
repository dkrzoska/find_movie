import React, {useEffect, useState} from 'react';

function SearchForm({question}) {

const [searchFraze, setSearchFraze] = useState('');

const handleChangeSearchFraze = (ev) => {
    setSearchFraze(ev.target.value);
}

const sendSearchData = (ev) => {
    ev.preventDefault();
    const searchData = searchFraze
    console.log(searchData);
    question(searchData);
}

useEffect(() => {

});

    return (
        <div>
            <form onSubmit = {sendSearchData}>
                <p>Search <input onChange={handleChangeSearchFraze} value={searchFraze}></input></p>
                <button>Szukaj</button>
            </form>
        </div>
    )
}

export default SearchForm
