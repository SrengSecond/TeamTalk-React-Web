import React from "react";
class FetchData extends React.Component
{
    constructor() {
        super();
        this.state =
            {
                topText: "",
                bottomText: "",
                randomImage: "http://i.imgflip.com/1bij.jpg",
                isLoading: false,
                allMemeImgs: []
            }
            this.handleChange = this.handleChange.bind(this)
            this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount()
    {
        this.setState(
            {
                isLoading: true
            })
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then((result) =>
            {
                const {memes} = result.data
                /*console.log(memes[Math.ceil(Math.random() * 100)])*/
                console.log(memes)
                this.setState({
                    allMemeImgs: memes,
                    isLoading: false
                })
            })
    }
    handleChange = (event) =>
    {
        const {name,value} = event.target
        this.setState(
            {
                [name]: value
            })
    }
    handleClick(event)
    {
        event.preventDefault();
        const randomIndex = Math.ceil(Math.random()*this.state.allMemeImgs.length);
        this.setState({
            randomImage: this.state.allMemeImgs[randomIndex].url
        })

    }

    render()
    {
        console.log(this.state.topText + this.state.bottomText)

        return (
            <div>
                {this.state.isLoading?<h1>Loading</h1>:<h1>Generator Meme</h1>}
                <form className={"meme-form"}>
                    <input
                        type="text"
                        name={"topText"}
                        value={this.state.topText}
                        onChange={this.handleChange}
                        placeholder={"TopText"}
                    />

                    <input
                        type="text"
                        name={"bottomText"}
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                        placeholder={"BottomText"}
                    />
                    
                    <button onClick={this.handleClick}>Click</button>
                </form>
                <hr/>
                <div className={"meme"}>
                    <img src={this.state.randomImage} alt=""/>
                    <h2 className={"top"}>{this.state.topText}</h2>
                    <h2 className={"bottom"}>{this.state.bottomText}</h2>
                </div>
            </div>

        )
    }
}
export default FetchData