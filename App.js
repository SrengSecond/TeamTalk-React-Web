import React,{Component} from 'react'

//import Layout from "./BurgerBuilder/components/Layout/Layout";
//import BurgerBuilder from "./BurgerBuilder/containers/BurgerBuilder/BurgerBuilder";
import Layout from "./React-feature/ResponNavBar/components/layout/Layout";

import './React-feature/ResponNavBar/App.css'

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
            // <div className="hoc">
            //     <Layout>
            //         <BurgerBuilder/>
            //     </Layout>
            // </div>

            <div>
                <Layout>

                </Layout>
            </div>
        )
    }

}
export default App;