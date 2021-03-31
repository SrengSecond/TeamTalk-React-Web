import React from 'react';
import './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

function Burger(props)
{
    const newArrayKey = Object.keys(props.ingredients) // output expect ['salad','bacon', ... ]
    const transformIngredients = Object.keys(props.ingredients)
        .map(eachKey => {
            return [...Array(props.ingredients[eachKey])] //output expect [{undefine},{undefine, undefine}, ....]
                .map((_,index) => {
                    return <BurgerIngredient key={eachKey + index} type={eachKey}/>
                })
        })

        //The reduce() method applies a function against an accumulator and each value of the typed array
        let ingredientPackage = transformIngredients.reduce((arr, el) => {
            let a = arr.concat(el)
            console.log(a);
            return a;
        },[])

    console.log(newArrayKey)
    console.log(transformIngredients)
    console.log(ingredientPackage)

    if(ingredientPackage.length === 0)
    {
        ingredientPackage = <p>Please start adding Ingredients</p>
    }

    return (
        <div className="burger">
            {/*Render the burger*/}
            <BurgerIngredient type={"bread-top"}/>
            {ingredientPackage}
            <BurgerIngredient type={"bread-bottom"}/>
        </div>
    );
}

export default Burger;