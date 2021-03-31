import React from 'react';
import './Modal.css'

function Modal(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default Modal;