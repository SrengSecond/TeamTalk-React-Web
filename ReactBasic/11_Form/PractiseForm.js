import React from 'react'
class PractiseForm extends React.Component
{
    constructor() {
        super();
        this.state =
            {
                firstName: "",
                lastName: "",
                age: "",
                destination: [
                    {name:"JapanTown",code:32},
                    {name:"NewHaveon",code:42},
                ],
                gender: "",
            }

    }

    handleChange = (event) =>
    {
        const {name, value} = event.target
        this.setState({
                [name]: value
        })
    }

    render()
    {

        const style =
            {
                appearance: "textField"
            }
        return (
            <div>
                <form action="">

                    <input
                        type="text"
                        name="firstName"
                        placeholder={"First_Name"}
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    <br/>

                    <input
                        type="text"
                        name="lastName"
                        placeholder={"last_Name"}
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <br/>

                    <input
                        style={style}
                        type="number"
                        name="age"
                        placeholder={"Age"}
                        value={this.state.age}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                    />
                </form>
                <hr/>
                <h1>Entered Information</h1>
                <p>Your name:{this.state.firstName} {this.state.lastName}</p>
                <p>Your age:{this.state.age}</p>
                <p>Destination: {this.state.destination.map(each =>
                {
                    return(
                        `Name: ${each.name} Code: ${each.code} `
                    )
                })}</p>
            </div>
        )
    }
}
export default PractiseForm