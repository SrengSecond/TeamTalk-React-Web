import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

class HttpRequest extends Component
{
    state =
        {
            LoginUser:[],
            isLoading:true
        }
    setUser()
    {
        const url = "http://127.0.0.1:8000/api/register";
        axios.post(url,{firstName:"SOA",lastName:"ExampleLastName",
            school:"RUPPd",
            major:"ITE",
            imgprofile:"SA",
            year:3,
            email:"residentEvil@yahoo.coms",
            password:"11111111",
            password_confirmation:"11111111",
            phone:"123456789"})

            .then(response => {
                this.setState({LoginUser:response.data,isLoading:false})
                console.log(response.data)})
    }
    getUser()
    {

    }
    componentDidMount()
    {
        const url = "http://127.0.0.1:8000/api/users";
        axios.get(url)
            .then(response => {this.setState(
                {
                    LoginUser:response.data,
                    isLoading:false
                })
            console.log(response.data)})
    }
    render() {
        return (
            <div>
                {
                    this.state.LoginUser.map((each)=>(
                        <div>

                    </div>))
                }
                <h1>{this.state.LoginUser != null && !this.state.isLoading ? this.state.LoginUser[0].firstName: "isLoading" }</h1>
            </div>
        );
    }
}

HttpRequest.propTypes = {};

export default HttpRequest;
