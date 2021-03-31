import React,{useContext} from 'react';
import './BuildControls.css'
import BuildControl from "./BuildControl/BuildControl";
import controlContext from '../../../context/controls_context'
import Aux from "../../../hoc/Auxs";

const controls =
    [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]


function BuildControls(props)
{
    const context = useContext(controlContext);

    return (
        <div className="build-controls">
            <p>CurrentPrice: <strong> {props.totalPrice.toFixed(2)} </strong></p>
            {controls.map(each => {
                return (
                <BuildControl
                    key={each.label}
                    label={each.label}

                    type={each.type}
                    handleAdd ={context.controls}

                    addIngredientHandler={(event) => props.addIngredientHandler(event,each.type)}
                    disableInfo={props.disableInfo[each.type]}
                    /*addIngredientHandler={props.addIngredientHandler.bind(this,each.type)}*/
                />
                )
            })}

            <button
                className={"orderButton"}
                disabled={!props.purchasable}
            >OrderNow!</button>

        </div>
    );
}

export default BuildControls;