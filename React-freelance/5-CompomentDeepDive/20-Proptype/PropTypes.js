import React from 'react';
import Person from "./Person";
class PropTypes extends React.Component
{
    state =
        {
            name: "jackson",
            level: 32
        }
    render() {
        return (
            <div>
            <Person
                name={this.state.name}
                level={this.state.level}
            />
        </div>)
    }
}
export default PropTypes;