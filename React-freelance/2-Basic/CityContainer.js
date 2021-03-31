import React,{useState} from 'react'
import CityComponent from "./CityCompoment";
function CityContainer()
{
    const [city,setCity] = useState({
        city:"JackSon",
        town: [
            {name:"JapenTowns",population:12},
            {name:"Pacifica",population:9},
            {name:"Beach",population:32},
        ]
        });

    const handleChange = (firstName,secondName,thirdName) =>
    {
        setCity({
                town:
                    [
                        {name:firstName,population:122},
                        {name:secondName,population:92},
                        {name:thirdName,population:322},
                    ],
            })
    }
    const handleNameChange = (event) =>
    {
        setCity(
            {
                town:
                    [
                        {name:event.target.value,population:122}
                    ]
            }
        )
    }

    console.log(city);
    return(
        <div>
            <CityComponent
                handleChange={handleChange}
                handleName={handleNameChange}
                {...city}
            />

        </div>
    )
}
export default CityContainer