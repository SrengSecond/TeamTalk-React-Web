import React, {Component} from 'react';

class FectData extends Component
{
    state =
        {
            person: null,
            loading: true
        }
    async componentDidMount()
    {
        const url = "http://127.0.0.1:8000/api/Test";
/*        const response = await fetch(url);
        const data = await response.json();*/

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    person: data,
                    loading: false
                }));
    }

    render()
    {

        return (
            <div>
                {this.state.loading || !this.state.person ?
                    (<div>
                        Loading...
                    </div>)
                    :
                    <div>
                        {this.state.person.map((each,index) => (
                            <div key={index}>
                            <h1>{each.title}</h1>
                            <h1>{each.slug}</h1>
                        </div>))}

                    </div>
                }
            </div>
        );
    }
}

export default FectData;
