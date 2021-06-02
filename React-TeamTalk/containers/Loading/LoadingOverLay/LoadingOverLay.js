import React from 'react';
import LoadingOverlay from "react-loading-overlay";
import './LoadingOverLay.css'
function LoadingOverLay(props) {
    return (
        <LoadingOverlay
            active={true}
            spinner={<div className={"spinnerIcon"}><i className="fab fa-ethereum fa-spin fa-6x"/></div> }
            text={props.text}>
        </LoadingOverlay>
    );
}

export default LoadingOverLay;