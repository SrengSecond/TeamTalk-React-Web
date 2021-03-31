import React from 'react';
import PropsTypes from 'prop-types'
class Person extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>PersonName : {this.props.name}</h1>
                <h1>Level : {this.props.level}</h1>
            </div>)
    }
}
//IF type is not correct it will throw error in console
Person.propTypes =
    {
        name:PropsTypes.string,
        level:PropsTypes.number
    }
export default Person;