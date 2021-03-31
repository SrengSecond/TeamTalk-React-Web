import React from 'react'
function TextValidation(props)
{
    let validateLength = "Text too short";

    if(props.text.length > 5)
    {
        validateLength = "Text is long enough"
    }
    return (
        <div>
            <p
            >{validateLength}</p>
        </div>
    )
}
export default TextValidation
