import React from 'react'
import './Fecting.css'
import './PokemenMenu.css'
import Main from "./Main";

class Fecting extends React.Component
{
    constructor()
    {
        super();
        this.state =
            {
                pokemon: [],
                isLoading: false
            }
    }

    componentDidMount()
    {
        this.setState(
            {
                isLoading:true
            })

        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then((data) => 
            {
                console.log(data);
                this.setState({
                    isLoading:false,
                    pokemon: data.results
                })
            })
    }

    render()
    {
        const output_FetchAbleObject =  this.state.pokemon.map((each,index) =>
        {
            return (
                <div key={index}>
                    <h3>{each.name}</h3>
                </div>
            )
        })

        return (
            <div className="Fecting">
                <div className="Pokemon-Menu">
                    {/*{this.state.isLoading? <h1>is Loading...</h1> : <h1>{output_FetchAbleObject}</h1>}*/}
                    <Main/>
                </div>

                <div className="nested">
                    <div className={"box1"}>Align_Self_center</div>
                    <div className={"box2"}>Align_Self_start</div>
                    <div className={"box3"}>Align_Self_end</div>
                    <div>Box 4</div>
                    <div>Box 5</div>
                    <div className={"box3"}>Box 6</div>
                </div>

                <div className="nested_2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid atque consectetur corporis dolore excepturi exercitationem, laudantium neque nobis nulla pariatur repellat tenetur veniam vitae voluptatem! Ab accusamus ad alias aliquid aspernatur autem beatae blanditiis cupiditate dolor eaque exercitationem fugit harum id impedit ipsa iste iusto laboriosam minus molestiae natus nisi nulla officiis omnis, quis quo quos recusandae reiciendis soluta ullam vel? Ad consequatur, deleniti doloremque ea eius error ipsam magnam, odit perspiciatis provident qui rerum. Ad at aut beatae cumque distinctio dolor dolorem est eum facere impedit ipsam ipsum, iste, iusto maxime, molestiae obcaecati omnis perspiciatis sequi temporibus voluptatem.
                </div>

                <div >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque eaque eligendi iure neque perspiciatis, quos reprehenderit sapiente. Atque consequatur cum, debitis ea eligendi illum quam quia quibusdam quis quos rem reprehenderit rerum sed tempora voluptatibus. Delectus dolorem facilis nostrum.
                </div>

                <div className="nested_2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid atque consectetur corporis dolore excepturi exercitationem, laudantium neque nobis nulla pariatur repellat tenetur veniam vitae voluptatem! Ab accusamus ad alias aliquid aspernatur autem beatae blanditiis cupiditate dolor eaque exercitationem fugit harum id impedit ipsa iste iusto laboriosam minus molestiae natus nisi nulla officiis omnis, quis quo quos recusandae reiciendis soluta ullam vel? Ad consequatur, deleniti doloremque ea eius error ipsam magnam, odit perspiciatis provident qui rerum. Ad at aut beatae cumque distinctio dolor dolorem est eum facere impedit ipsam ipsum, iste, iusto maxime, molestiae obcaecati omnis perspiciatis sequi temporibus voluptatem.
                </div>

                <div className="area">
                    <div className={"box_1"}>
                       <p>
                           header
                       </p>
                    </div>
                    <div className={"box_2"}>
                        Main</div>
                    <div className={"box_3"}>
                        Empty</div>
                    <div className={"box_4"}>
                        SideBar</div>
                    <div className={"box_5"}>
                        Footer</div>
                </div>

                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid atque consectetur corporis dolore excepturi exercitationem, laudantium neque nobis nulla pariatur repellat tenetur veniam vitae voluptatem! Ab accusamus ad alias aliquid aspernatur autem beatae blanditiis cupiditate dolor eaque exercitationem fugit harum id impedit ipsa iste iusto laboriosam minus molestiae natus nisi nulla officiis omnis, quis quo quos recusandae reiciendis soluta ullam vel? Ad consequatur, deleniti doloremque ea eius error ipsam magnam, odit perspiciatis provident qui rerum. Ad at aut beatae cumque distinctio dolor dolorem est eum facere impedit ipsam ipsum, iste, iusto maxime, molestiae obcaecati omnis perspiciatis sequi temporibus voluptatem.
                </div>

                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid atque consectetur corporis dolore excepturi exercitationem, laudantium neque nobis nulla pariatur repellat tenetur veniam vitae voluptatem! Ab accusamus ad alias aliquid aspernatur autem beatae blanditiis cupiditate dolor eaque exercitationem fugit harum id impedit ipsa iste iusto laboriosam minus molestiae natus nisi nulla officiis omnis, quis quo quos recusandae reiciendis soluta ullam vel? Ad consequatur, deleniti doloremque ea eius error ipsam magnam, odit perspiciatis provident qui rerum. Ad at aut beatae cumque distinctio dolor dolorem est eum facere impedit ipsam ipsum, iste, iusto maxime, molestiae obcaecati omnis perspiciatis sequi temporibus voluptatem.
                </div>

                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid atque consectetur corporis dolore excepturi exercitationem, laudantium neque nobis nulla pariatur repellat tenetur veniam vitae voluptatem! Ab accusamus ad alias aliquid aspernatur autem beatae blanditiis cupiditate dolor eaque exercitationem fugit harum id impedit ipsa iste iusto laboriosam minus molestiae natus nisi nulla officiis omnis, quis quo quos recusandae reiciendis soluta ullam vel? Ad consequatur, deleniti doloremque ea eius error ipsam magnam, odit perspiciatis provident qui rerum. Ad at aut beatae cumque distinctio dolor dolorem est eum facere impedit ipsam ipsum, iste, iusto maxime, molestiae obcaecati omnis perspiciatis sequi temporibus voluptatem.
                </div>
            </div>
            //endregion
        )
    }
}
export default Fecting