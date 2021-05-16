import React from 'react';
import Home from "../../containers/Home/Home";
import ExploreCompoment from "../../containers/Explore/ExploreCompoment";
import LogInOut from "../../containers/LogInOut/LogInOut";
import axios from "axios";

// axios.defaults.headers = {
//     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
// },


class WelcomePage extends React.Component
{


    componentDidMount() {
            // // api.get('/team')
            // //     .then(res => console.log(res.data))
            // axios.post('http://127.0.0.1:8000/api/register',{
            //     "name":"VuthyVisal",
            //     "email":"some1@gmail.com",
            //     "password":"Ahvisalxd@123"
            // })
            //     .then(response => {console.log(response.data)})
            // // .catch(error => {
            // //     console.log(error.response)
            // // });

            // axios.post('http://127.0.0.1:8000/api/register', {
            //     "name":"Sreng",
            //     "email":"20ssssreng@gmail.com",
            //     "password":"123"
            // })
            //     .then(res=>console.log(res));

        // axios.post('http://127.0.0.1:8000/api/team',
        //     {
        //         "title":"MyTeam5231",
        //         "userID":"1",
        //         "deptID":"5",
        //         "activityID":"8",
        //         "targetMember":"4",
        //         "permissionID":"1",
        //         "tagID":"3",
        //         "location":""
        //     })
        //     .then(res => console.log(res.data));

        // axios.post('http://127.0.0.1:8000/api/login',
        //     {
        //
        //         "email":"sok@gmail.com",
        //         "password":"zombie123"
        //     })
        //     .then(res => console.log(res.data));
        //

        // axios.post('login',
        //     {
        //         "email":"some3@gmail.com",
        //         "password":"Ahvisalxd@123"
        //     })
        //     .then(res => console.log(res.data));
        //


    }
    // handleLogin = () =>
    // {
    //     axios.get('team')
    //         .then(res =>console.log(res.data))
    // }

    render()
    {
        return (
            <div>
                <Home/>
                <ExploreCompoment/>
                <LogInOut/>
            </div>
        );
    }

}

export default WelcomePage;