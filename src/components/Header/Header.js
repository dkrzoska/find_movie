import React from 'react';
import './Header.scss';
import icon from '../../assets/Film-icon.png';

function Header() {
    return (
        <div className='header'>
            <img alt='icon' className='header__icon' src={icon} />
            <p className='header__title'>Movie search engine</p>
        </div>
    )
}

export default Header
