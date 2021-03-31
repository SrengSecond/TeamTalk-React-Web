import React, {useEffect, useState} from "react";
function HookEffect()
{
    console.log("LifeCycle: function")

    const [count,setCount] = useState(
        {
            count:0
        })

    const [name,setName] = useState("")
    const handleChange = () =>
    {
            setCount(
                {
                    count: count.count + 1
                })
    }

    const handleDoc = () =>
    {
        console.log("Update Name")

        document.title = `Count ${count.count}`
    }

    const handleNameChange = (event) =>
    {
        setName(event.target.value)
    }

    useEffect(handleDoc,[count])


    return (
        <div>
            <input type={"text"} placeholder={"name"} value={name} onChange={handleNameChange}/>
            <button onClick={handleChange} >click count {count.count}</button>
            <h2>{JSON.stringify(count)}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}
export default HookEffect