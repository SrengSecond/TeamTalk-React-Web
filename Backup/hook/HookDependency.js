import React, {useEffect, useState} from "react";
function HookDependency()
{
    const [count,setCount] = useState(0)
    const updateCount = () =>
    {
        console.log("update number")
        const interval = setInterval(update,1000)
        return() =>
        {
            clearInterval(interval)
        }
    }
    const update = () =>
    {
        setCount(count + 1)
    }
    useEffect(updateCount,[count])
    return (
        <div>
            <h1>count : {count}</h1>
        </div>
    )
}
export default HookDependency