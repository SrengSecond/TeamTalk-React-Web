import React from 'react';
import PropTypes from 'prop-types';

WithClass.propTypes = {

};

function WithClass(props) {
    return (
        <div className={props.classes}>
            {props.children}
        </div>
    );
}

export default WithClass;