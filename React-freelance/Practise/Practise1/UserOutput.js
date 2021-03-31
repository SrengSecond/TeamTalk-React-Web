import React from 'react'
function UserOutput(props)
{
    let key = 0;
    return(
        <div>
            {props.user.map((each,index) =>
            {
                key++;
                return(
                    <div
                        key={key}
                        onClick={() => props.handleDelete(index)}>
                        <h3>Author: {each.author}</h3>
                        <h5>Date: {props.date}</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae doloremque dolorum facilis nihil non officiis praesentium voluptate. Accusamus, cumque deleniti facere illum iure iusto magni placeat praesentium, qui repellat, soluta?</p>
                    </div>
                )
            })}

        </div>
    )
}
export default UserOutput;