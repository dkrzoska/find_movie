import React from 'react';
import './Button.scss';

function Button({ text, height, width, handleChangePage, value }) {
    return (
        <button
            onClick={handleChangePage}
            value={value}
            style={{ height: height, minWidth: width }}
        >
            {text}
        </button>
    )
}

export default Button
