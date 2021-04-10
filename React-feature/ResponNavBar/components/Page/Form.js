import React from 'react';
import WithClass from '../../hoc/WithClass'
import Aux from '../../hoc/Auxs'
import './Form.css'
const Form = () => {
    return (
        <Aux>
            <WithClass classes={"form"}>
                <h1>Check this cool <br/> 404 error page! <br/><i className="fas fa-box-open fa-2x"/></h1>
            </WithClass >
        </Aux>
    );
};

export default Form;