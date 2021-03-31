import React from "react";
function Product(props)
{
    const gpuColor =
        {

        }

    if(props.name.includes("Rx"))
    {
        console.log("red");
        gpuColor.color = "red"
    }
    else
        {
            console.log("green");
            gpuColor.color = "green"
        }

    return (
        <div>
            <h4>ID: {props.id}</h4>
            <h3 style={gpuColor}>Name: {props.name}</h3>
            <p>Price: {props.price/*{.toLocaleString("en-US", {style: "currency",currency: "USD"})*/}</p>
        </div>
    )
}
export default Product