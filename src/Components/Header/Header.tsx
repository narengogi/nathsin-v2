import React from 'react';
import '../Common/common.css';

function Header() {
    return (
        <div className='header'>
            <a className='href' href='/home'>
                HOME
            </a>
            <a className='href' href='/blog'>
                ESSAYS
            </a>
            <a className='href' href='/letters'>
                LETTERS
            </a>
            <a className='href' href='/journal'>
                OTHER
            </a>
        </div>
    );
}

export default Header;
