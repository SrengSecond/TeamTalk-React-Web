import React,{useState} from "react";

function HookCounter()
{
    const [count, updateCount] = useState(0)

    const handleClick = () =>
    {
        for(let i = 0; i<5; i++)
        {
            updateCount((prev) => prev+1)
            console.log("update")
        }
    }
    return (
        <div>
            <button onClick={()=>
                {
                    updateCount(count + 1)
                }
            }>click {count}</button>

            <button onClick={handleClick}>
                plus 5
            </button>
        </div>
    )
}

export default HookCounter