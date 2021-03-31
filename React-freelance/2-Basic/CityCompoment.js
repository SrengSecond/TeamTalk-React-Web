import React from "react";
function CityComponent(props)
{
    let i = 0;
    return(
        <div>
            <h3>City:{props.city}</h3>
            {props.town.map(each =>
            {
                i++;
                return(
                    <p key={i}>Name: {each.name} Code: {each.population}</p>
                )
            })
            }
            <button
                //onClick={() => props.handleChange("SNK","JAME","CDPR")}
                onClick={props.handleChange.bind(this,"SNK","SEGA","CAPCOM")}>
                updateInfo
            </button><br/>
            <input
                type="text"
                onChange={props.handleName}
                value={props.town[0].name}

            /> Name1 <br/>


        </div>
        )
}
export default CityComponent