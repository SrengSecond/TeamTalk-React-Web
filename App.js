import React,{Component} from 'react'
import Layout from "./BurgerBuilder/components/Layout/Layout";
import BurgerBuilder from "./BurgerBuilder/containers/BurgerBuilder/BurgerBuilder";
import './App.css'



class App extends Component
{
    state =
        {
            openMore: false
        }

    handleMoreMenu = () =>
        {
            this.setState((preState) =>
            {
                return(
                    {
                        openMore:!preState.openMore
                    })
            })
        }
    render()
    {

        return(
            <div className="hoc">
                <nav>
                    <div className="logo">TeamTalk.</div>
                    <ul
                        className="nav-links"
                        style={{transform: this.state.openMore ? 'translateX(0px)' : ''}}
                    >
                        <li>
                            <a href="">About Us</a>
                        </li>
                        <li>
                            <a href="">Community</a>
                        </li>
                        <li>
                            <a href="">Help</a>
                        </li>
                        <li>
                            <a href="">Join Us</a>
                        </li>
                    </ul>
                    <i className="fas fa-bars more-button"
                        onClick={this.handleMoreMenu}>
                    </i>
                </nav>
                <Layout>
                    <BurgerBuilder/>
                </Layout>
            </div>
        )
    }

}
export default App;