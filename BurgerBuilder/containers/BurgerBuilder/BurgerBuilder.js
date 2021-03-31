import React,{Component} from 'react';
import Aux from '../../hoc/Auxs'
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import controlContext from '../../context/controls_context'

const INGREDIENT_PRICES =
    {
        salad: 0.2,
        bacon: 0.5,
        cheese: 1.2,
        meat:1.5
    }

class BurgerBuilder extends Component
{
    state =
        {
            firstName:'',
            lastName:'',
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat:0
            },
            totalPrice: 4,
            purchasable: false
        }
    handleAdd = (event) =>
    {
        const {name,value} = event.target;
        this.setState(prevState => (
            {
                ingredients:
                    {
                        ...prevState.ingredients,
                        [name]:prevState.ingredients[name] + 1
                    }
            }
        ));
    }

    updatePurchaseState(ingredients)
    {
        /*const ingredients = {...this.state.ingredients};*/
        const arrayOfIngredients = Object.keys(ingredients)
            .map(arrayKey =>
            {
                return ingredients[arrayKey]
            })
            .reduce((sum,el) =>
            {
                return sum + el;
            },0);
        this.setState(
            {
                purchasable: arrayOfIngredients > 0
            }
        )

    }

    addIngredientHandler = (event,type) =>
    {
        const oldCount = this.state.ingredients[type]; //pick up the update item

        let newCount;
        if(event.target.name === "more")
        {
             newCount = oldCount + 1; // update the item
        }
        else if(event.target.name === "less")
        {
            if(oldCount <= 0)
            {
                return;
            }
            newCount = oldCount - 1; // update the item

        }
        let updateIngredient = {...this.state.ingredients} // get the copy of item array

        updateIngredient[type] = newCount; //update the copy array

        const priceAddition = INGREDIENT_PRICES[type];//Pick up the item Price
        const totalPrice = this.state.totalPrice; //Pick up old price

        let updatePrice
        if( event.target.name === "more")
        {
            updatePrice = priceAddition + totalPrice;
        }
        else if(event.target.name === "less")
        {
            updatePrice = totalPrice - priceAddition
        }

        this.setState(
            {
                ingredients: updateIngredient,
                totalPrice: updatePrice
            })
        this.updatePurchaseState(updateIngredient);
        //setstate for total price and ingredient item
    }

    render()
    {
        const disableInfo = {...this.state.ingredients} //get copy of ingredient array
        for(let key in disableInfo) //for each loop in disable info
        {
            disableInfo[key] = disableInfo[key] <= 0 //replace each copy array with bool - if
        }

        return(
            <Aux>
                <controlContext.Provider value={
                    {
                        controls: this.handleAdd,
                    }}
                >
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    addIngredientHandler={this.addIngredientHandler}
                    disableInfo={disableInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />

                </controlContext.Provider>

            </Aux>
        )
    }
}
export default BurgerBuilder