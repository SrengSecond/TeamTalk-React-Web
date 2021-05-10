import React from 'react';
import {HashLink} from 'react-router-hash-link';
import './Button.css'
const Button = () => {
    return (
        <HashLink smooth to={'#sign-up'}>
            <button className={'btn'}>
                Log In
            </button>
        </HashLink>
    );
};

export default Button;
