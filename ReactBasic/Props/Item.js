import React from "react";
import './Item.css'
import './Items.css'

const num = 10;

function Item(props)
{
    return(
        <div className="item">
            <h3>Name: {props.name}</h3>
            <p>Cost: {props.cost}</p>
            <p>Description: {props.description}</p>

            <ul>
                <li>MainPerk: {props.skillPerk.mainPerk}</li>
                <li>SubPerk: {props.skillPerk.subPerk}</li>
                <li>PassivePerk: {props.skillPerk.passivePerk}</li>
            </ul>
        </div>
    )

}
export default Item