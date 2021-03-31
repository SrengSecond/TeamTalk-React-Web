import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../../index.css';
import MainApp from "./MainText/MainApp";

/*import App from "./Exercise/App";*/
import TodoApp from "./Practise/TodoApp";
import CoverArt from "./Compoment/CoverArt";
import './Compoment/Props.css'
import Jokes from "./Practise/Jokes";
import JokeData from "./Practise/JokeData"
import Product from "./Practise/Product";
import ProductData from "./Practise/ProductData";
import EventHanding from "./Practise/EventHanding";
import Conditional from "./Practise/Conditional";
import Conditional2 from "./Practise/Conditional2";
import Conditional3 from "./Practise/Conditional3";
import FetchData from "./Practise/FetchData";
import Form from "./Form/Form";
import FormPractise from "./Form/FormPractise";
import ClassCounter from "./hook/classCounter";
import HookCounter from "./hook/HookCounter";
import HookCounter2 from "./hook/HookCounter2";
import HookArray from "./hook/HookArray";
import HookEffect from "./hook/HookEffect";
import ClassEffect from "./hook/ClassEffect";
import HookEffect2 from "./hook/HookEffect2";
import ClassEffect2 from "./hook/ClassEffect2";
import MouseContainer from "./hook/MouseContainer";
import App from "./Clone/App";

const ArrowFunction = () => <div> <h1>Hello World</h1> No future </div>

//7-function Component
function MyApp()
{
    return(
        <div>
            <ul>
                <li>Un_orderList1</li>
                <li>Un_orderList2</li>
                <li>Un_orderList3</li>
                <li>Un_orderList4</li>
            </ul>
            <ol>
                <li>Order_List1</li>
                <li>Order_List2</li>
                <li>Order_List3</li>
                <li>Order_List4</li>
            </ol>
        </div>
    )
}
function Good()
{
    const date = new Date(/*2018,6,31,21*/);
    const name = 'Ly Sreng'
    const hours = date.getHours();
    let timeOfDay;

    const inlineStyle =
        {
            fontSize: "30px"
        }

    if(hours<12)
    {
        inlineStyle.color = "orange"
        inlineStyle.backgroundColor = "black"
        timeOfDay = "Morning"
    }
    else if (hours>= 12 && hours <17)
    {
        inlineStyle.color = "red"
        inlineStyle.backgroundColor = "yellow"
        timeOfDay = "Afternoon"
    }
    else {
        inlineStyle.color = "green"
        inlineStyle.backgroundColor = "black"
        timeOfDay = "Night"
    }

    return (
        <div>
            <h1 style={inlineStyle}>Good {timeOfDay}</h1>
            <h1>It is currently about  {`${date.getHours()%12} ${name}`}</h1>
        </div>
    )
}
function PropCoverArt()
{
    return(
    <div className={"Cover_art_list"}>
        <CoverArt
            contact = {
                {
                    name: "Destiny 2",
                    img : "https://images-na.ssl-images-amazon.com/images/I/71mJCznfFcL._SL1500_.jpg",
                    ReleaseDate : "2017"
                }
            }

        />
        <CoverArt
            contact = {
                {
                    name: "Destiny 2 Forsaken",
                    img : "https://images-na.ssl-images-amazon.com/images/I/71MlnxTuzcL._SL1500_.jpg",
                    ReleaseDate : "2018"
                }
            }
        />
        <CoverArt
            contact = {
                {
                    name: "Destiny",
                    img : "https://images-na.ssl-images-amazon.com/images/I/91cBPSshuFL._SL1500_.jpg",
                    ReleaseDate : "2014"
                }
            }
        />
    </div>
    )
}
function Joke()
{

    const jokeCompoment = JokeData.map(joke=>
        <Jokes
            key = {joke.id}
            question = {joke.question}
            punchline = {joke.punchline}/>
        )

    return (
        <div>
            <h1>Joke</h1>
            {jokeCompoment}
{/*

            <Jokes
                contact = {
                    {
                        question: "You know how else ?",
                        punchline: "My MOM"
                    }
                }
            />
            <Jokes
                contact={
                    {
                        question:"Gaba ?",
                        punchline: "MAMA"
                    }
                }
            />

            <Jokes
                contact={
                    {
                        punchline: "jack"
                    }
                }
            />
*/}

        </div>
    )
}
function Products()
{
    const productList = ProductData.map(eachProduct =>
            <Product
                id = {eachProduct.id}
                name = {eachProduct.name}
                price = {eachProduct.price}
            />
        )
    const inlineStyle =
        {
            color: "green",
        }
    return (
        <div>
            <h3 style={inlineStyle}>Product List</h3>
            {productList}
        </div>
    )
}
class ClassCompoment extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            answerState: "StateChild"
        }
    }
    helloInClass()
    {
        return <p>Live from Class Component</p>
    }
    render()
    {
        return(
            <div>
                {this.helloInClass()}
                <Header username = "Sreng"/>
                <Greeting State = {this.state.answerState}/>
            </div>
        )
    }
}
class Header extends React.Component
{
    constructor()
    {
        super();
        this.state =
            {
                answer: "State"
            }
    }
    render()
    {
        return (
        <div>
            <h1>FiverRadio 1.05</h1>
            <p>Welcome,{this.props.username}</p>
            <p>{this.state.answer}</p>
        </div>
        )
    }
}
class Greeting extends Component
{
    render()
    {
        return (
            <div>
                <h1>Good Morning Night City to you</h1>
                <h4>{this.props.State}</h4>
            </div>
            )
    }
}
class PractiseClass extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            isLogin: true
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {

    }

    componentDidMount()
    {


    }

    shouldComponentUpdate(nextProps, nextState, nextContext)
    {
    }

    componentWillUnmount()
    {

    }

    render()
    {
        let displayWord;
        displayWord = this.state.isLogin ? "login" : "logout"
        return (
            <div>
                <h1>You are currently {displayWord}</h1>
            </div>
        )
    }
}
class ConditionalRendering extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            isLoading: true
        }
    }
    componentDidMount()
    {
        setTimeout(() =>
            {
                this.setState({
                    isLoading: false
                })
            },
            1500)
    }

    render()
    {
        return (
            <div>
                <Conditional isLoading={this.state.isLoading} />
            </div>
        )
    }
}



/*ReactDOM.render(<MainApp/>,document.getElementById("root"))*/


//8.Move Component
//9.Chill and Parent
//10.To_DO app
//14.JSX to javaScript and Back
//15.Inline and dynamic style
//16.Props
//26.class

/**React advance topic
 * React Context API
 * Error Boundarise
 * Reader Props
 * High Order
 * React Router
 * Raect Hook
 * React lazy, memo, and suspense
 * */


