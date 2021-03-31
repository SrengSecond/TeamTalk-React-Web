import React from 'react'
class Forms extends React.Component
{
    constructor() {
        super();
        this.state =
            {
                firstName: "",
                lastName: "",
                isFriendly: true,
                textBox: "",
                gender: "",
                favColor: ""
            }
    }
    handleChange = (event) =>
    {
        const {name, value, checked, type} = event.target
        type === "checkbox" ? this.setState(
            {
                [name]: checked
            })
            : this.setState(
                {
                    /*[event.target.name]: event.target.value*/
                    [name]: value
                })
        console.log("HandleChange function called");
    }
    handleSubmit = () =>
    {

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.firstName}
                        name={"firstName"}
                        placeholder={"FirstName"}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        value={this.state.lastName}
                        name={"lastName"}
                        placeholder={"LastName"}
                        onChange={this.handleChange}
                    />
                    <button type="submit">click</button>
                    <h1>{this.state.firstName} {this.state.lastName}</h1>

                    <textarea
                        value={this.state.textBox}
                        name={"textBox"}
                        onChange={this.handleChange}
                    />
                    <input
                        type="checkbox"
                        name={"isFriendly"}
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    />
                    <input
                        type="radio"
                        name={"gender"}
                        value={"male"}
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                    <input
                        type="radio"
                        name={"gender"}
                        value={"female"}
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                    <h1>you are {this.state.gender}</h1>

                    <select
                        value={this.state.favColor}
                        onChange={this.handleChange}
                        name={"favColor"}
                    >
                        <option value="RED">red</option>
                        <option value="BLUE">blue</option>
                        <option value="GREEN">green</option>
                    </select>
                    <h1>fav color is {this.state.favColor}</h1>
                </form>
            </div>
        )
    }
}
export default Forms;