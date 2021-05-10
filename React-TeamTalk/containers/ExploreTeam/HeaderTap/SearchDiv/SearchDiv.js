import React, {Component} from 'react';
import SearchBar from "material-ui-search-bar";
import './SearchDiv.css'

const doSomethingWith = () => {

}
class SearchDiv extends Component
{

    state =
        {
            value:""
        }
    render() {
        return (
            <SearchBar className="search"
                value={this.state.value}
                onChange={(newValue) => this.setState({ value: newValue })}
                onRequestSearch={() => doSomethingWith(this.state.value)}
                placeholder={"Search all available projects"}
            />
        );
    }
}


export default SearchDiv;

