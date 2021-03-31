import React,{useState} from 'react'
import UserOutput from "./UserOutput";
import UserInput from "./UserInput";

function BasicPractise()
{
    const today = () =>
    {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        return  yyyy + "-" + mm + "-" + dd ;
    }

    const [date,setDate] = useState(today);
    const [display,setDisplayed] = useState(true)
    const [user,setUser] = useState([
        {author:"Mr Ben"},
        {author:"Jack Ass"},
        {author:"Master Zen"},
    ])

    const handleChange = (event) =>
    {
        setDate(event.target.value);
    }

    const handleClick = () =>
    {
        setDisplayed(!display)
    }
    const handleDelete = (index) =>
    {
        const persons = user;
        persons.splice(index,1)
        console.log(persons);
        setUser(persons)
    }

    let article = null;

    if(display)
    {
        article =
            (
                <div /*style={{display: !display && "none"}}*/>
                    <UserInput
                        handleChange={handleChange}
                        value={date}
                    />

                    <UserOutput
                        user={user}
                        date={date}
                        handleDelete={handleDelete}
                    />
                </div>
            )
    }
    return(
        <div>
            <button
                onClick={handleClick}>
                Switch {display? "off" : "on"}
            </button>
            {article}

        </div>
    )
}
export default BasicPractise;