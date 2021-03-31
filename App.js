import React,{Component} from 'react'
import Layout from "./BurgerBuilder/components/Layout/Layout";
import BurgerBuilder from "./BurgerBuilder/containers/BurgerBuilder/BurgerBuilder";
class App extends Component
{
    render()
    {
        return(
            <div>
                <Layout>
                    <BurgerBuilder/>
                </Layout>
            </div>
        )
    }

}
export default App;