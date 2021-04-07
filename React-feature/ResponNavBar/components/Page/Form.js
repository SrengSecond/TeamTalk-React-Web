import React from 'react';
import WithClass from '../../hoc/WithClass'
import './Form.css'
const Form = () => {
    return (
        <WithClass classes={"form"}>
            <h1>Check this cool <br/> 404 error page! <br/><i className="fas fa-box-open fa-2x"/></h1>

        </WithClass >
    );
};

export default Form;