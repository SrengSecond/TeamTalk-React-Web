import React from 'react'
function Destructuring()
{
    const numbers = [1,2,3,4,5];
    const [num1,num2] = numbers;

    const dobleNumber = (...array) =>
    {
        return (
        array.map(each =>
        {
            return (
                each * 2
            )
        })
        )
    }

    console.log(num1);
    console.log(num2);
    console.log(dobleNumber(...numbers));

    return (
        <div>
            <h1>Destructuring</h1>

        </div>
    )
}
export default Destructuring