import React from "react";
class Form extends React.Component
{
    state =
        {

        }
    constructor() {
        super();
        this.state =
            {
                firstName: "",
                LastName: "",
                isFriendly: true,
                gender: "",
                color: "red"
            }
            /*this.handleChange = this.handleChange.bind(this)*/
    }
    handleChange = (event) =>
    {
        const {name, value, type, checked} = event.target
        type === "checkbox"? this.setState({[name]: checked}) : this.setState({[name]: value})
    }
    handleSubmit()
    {

    }
    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.firstName}
                    name={"firstName"}
                    placeholder={"First Name"}
                    onChange={this.handleChange}

                />
                <br/>
                <input
                    type="text"
                    value={this.state.LastName}
                    name={"LastName"}
                    placeholder={"Last Name"}
                    onChange={this.handleChange}
                />
                <h3>{this.state.firstName} {this.state.LastName}</h3>

                <textarea value={"value"}
                          onChange={this.handleChange}
                />

                <br/>

                <label>
                    <input
                        type="checkbox"
                        name={"isFriendly"}
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    />
                    Ticket
                </label>

                <label>
                    <input
                        type="radio"
                        name={"gender"}
                        value={"male"}
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    />
                    Male
                </label>

                <label>
                    <input
                        type="radio"
                        name={"gender"}
                        value={"female"}
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    />
                    Female
                </label>

                <h3>You are {this.state.gender}</h3>

                <select name={"color"}
                        onChange={this.handleChange}
                        value={this.state.color}>
                    <option value={"blue"}>Blue</option>
                    <option value={"green"}>Green</option>
                    <option value={"red"}>Red</option>
                </select>
                <h3>color {this.state.color}</h3>
                <button>Submit</button>
            </form>
        )
    }

}
export default Form