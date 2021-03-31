import React, { useEffect, useState } from 'react';
import './SearchForm.scss';
import Button from '../Button/Button';

function SearchForm({ question }) {

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
            <form onSubmit={sendSearchData}>
                <input placeholder='search phrase' onChange={handleChangeSearchFraze} value={searchFraze}></input>
                <Button
                    text='Szukaj'
                    height='30px'
                    width='100px'
                />
            </form>
        </div>
    )
}

export default SearchForm
