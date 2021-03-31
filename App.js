import React,{Component} from 'react'
import Layout from "./BurgerBuilder/components/Layout/Layout";
import BurgerBuilder from "./BurgerBuilder/containers/BurgerBuilder/BurgerBuilder";
class App extends Component
{
    render()
    {
        return(
            <div>
                {/*<Layout>
                    <BurgerBuilder/>
                </Layout>*/}
                <nav>
                    <div className="logo"></div>
                    <ul className="nav-links">
                        <li>
                            <a href="">home</a>
                        </li>
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

                </nav>
            </div>
        )
    }

}
export default App;