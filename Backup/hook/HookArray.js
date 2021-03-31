import React, {useState} from "react";
function HookArray()
{
    const [item,setItem] = useState([])

    const handleClick = () =>
    {
        setItem([...item,
                {
                    id: item.length,
                    value: Math.ceil(Math.random()* 2)
                }
            ])
    }
    return (
        <div>
            <button onClick={handleClick}>click</button>
            <h2>{JSON.stringify(item)}</h2>
        </div>

    )

}
export default HookArray