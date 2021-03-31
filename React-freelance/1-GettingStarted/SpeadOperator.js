import React from 'react'
function SpeadOperator()
{
    const oldArray = [1,2,3,4,5];
    const newArray = [...oldArray,2,6]

    const oldObject =
        {
            name : "max",
        }
    const newObject =
        {
            ...oldObject,
            age: 21,
        }

    const filter = (...oldArray) =>
    {
        return (
            oldArray.filter(
                (each) =>  { return each === 1})
        )
    }
        console.log(newArray);
        console.log(newObject);
        console.log(oldArray);
        console.log(filter(1,2,3));

    return (
        <div>
            <h1>Spead Operator</h1>
            <p>Check Console.log</p>
        </div>
    )
}
export default SpeadOperator


