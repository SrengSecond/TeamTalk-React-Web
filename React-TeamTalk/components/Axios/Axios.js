import React, {Component} from 'react';

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
})
const loginApi = axios.create(
    {
        baseURL: 'http://127.0.0.1:8000/api/'
    })

class Axios extends Component
{

    state={

        user:[],
        game:[]
    }

    constructor()
    {
        super();
        // this.getGame();
        // this.LoginTeam();

    }

    componentDidMount()
    {

    }

    LoginTeam = async () =>
    {
        await axios.post('http://127.0.0.1:8000/api/login',{email: "stickercenter2@gmai.com",password:12345})
            .then(response =>{
                console.log(response)
            })

    }

    getGame = async ()  =>
    {
        await api.get('/Test',{ params: {_limit: 5}})
            .then(response => {this.setState(
                {
                    game:response.data,

                })
                console.log(response.data)})
    }

    createGame = async ()  =>
    {
        let res = await api.post('/setNewData',{title:"Demon",slug:"JackAss"})
            .then(response => console.log(response.data))
            .catch(err => console.log(err))
        console.log(res);
        this.getGame();
    }

    deleteGame = async (id) =>
    {
        let res = await api.delete(`/delete/${id}`)
        console.log(res)
        this.getGame();
    }
    updateGame = async (id,title,slug) =>
    {
        let data = await api.put(`/update/`,{id:id, title:title,slug:slug})
        this.getGame();
    }

    // lastIndex = () =>
    // {
    //     // const res = this.state.game.map(each => each.id);
    //     // console.log(res)
    //     let max = 0;
    //     this.state.game.forEach(each =>
    //     {
    //         if(each.id > max)
    //         {
    //             max = each.id;
    //         }
    //     })
    //     this.setState(
    //         {
    //             maxIndex: max
    //         })
    // }

    render()
    {

        return (
            <div>
                {/*{this.state.game.map((eachGame,index) => (*/}
                {/*    <div key={index}>*/}
                {/*        <h3 onClick={()=>this.updateGame(eachGame.id,`${eachGame.title}a`,`${eachGame.slug}a`)} >title: { eachGame.title} slug: {eachGame.slug} </h3>*/}
                {/*        <button onClick={() => this.deleteGame(eachGame.id)}>Del</button>*/}

                {/*    </div>))}*/}
                {/*<button onClick={this.createGame}>Click</button>*/}
                {/*<h4>Last index</h4>*/}
            </div>
        );
    }
}
export default Axios;
