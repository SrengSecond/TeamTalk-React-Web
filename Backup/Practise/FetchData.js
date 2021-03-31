import React from "react";
class FetchData extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            isLoading: false,
            character: {}
        }
    }

    componentDidMount()
    {

        fetch("https://swapi.dev/api/people/1/")
            .then(respone => respone.json())
            .then(data => this.setState(
                {
                    character: data,
                    isLoading: true
                })
            );
    }
    render()
    {
        return (
            <div>
                <p>{!this.state.isLoading ? "Loading..." : this.state.character.name}</p>
            </div>
        )
    }
}
export default FetchData