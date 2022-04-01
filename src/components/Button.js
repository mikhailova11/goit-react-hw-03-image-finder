import React from 'react';
import '../styles.css';


const Button = ({children, onClick}) => {
    return (
        <button type="button" className="Button" onClick={onClick}>
            {children}
        </button>
    )
}

export default Button