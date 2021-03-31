import React,{useState} from "react";
function HookCounter2()
{
    const [name,setName] = useState(
        {
            firsName:"",
            lastName:""
        })
    const handleChange = (event) =>
    {
        setName(
            {
                    ...name,
                    [event.target.name]: event.target.value
                }
                )
    }
    return (
        <div>
            <input type="text" name={"firsName"} value={name.firsName} onChange={handleChange}/>
            <input type="text" name={"lastName"} value={name.lastName} onChange={handleChange}/>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}
export default HookCounter2