import React from "react";

function FormComponent (props)
{
        return (
            <main>
                <form onSubmit={props.handleSubmit}>
                    <input
                        type="text"
                        placeholder={"First Name"}
                        value={props.data.firstName}
                        name={"firstName"}
                        onChange={props.handleChange}
                        required
                    /><br/>

                    <input
                        type="text"
                        placeholder={"Last Name"}
                        value={props.data.lastName}
                        name={"lastName"}
                        onChange={props.handleChange}
                        required
                    /><br/>
                    <input
                        type="number"
                        placeholder={"age"}
                        value={props.data.age}
                        name={"age"}
                        onChange={props.handleChange}
                    />
                    <br/>

                    <label htmlFor="">
                        <input
                            type="radio"
                            value={"male"}
                            name={"gender"}
                            checked={props.data.gender === "male"}
                            onChange={props.handleChange}
                        />
                        Male
                    </label>
                    <label htmlFor="">
                        <input
                            type="radio"
                            value={"female"}
                            name={"gender"}
                            checked={props.data.gender === "female"}
                            onChange={props.handleChange}
                        />
                        Female
                    </label>
                    <br/>
                    <select
                        name={"destination"}
                        value={props.data.destination}
                        onChange={props.handleChange}
                    >
                        <option value={""}>---Select-Your-Destination---</option>
                        <option value={"heywood"}>Heywood</option>
                        <option value={"japenTown"}>JapanTown</option>
                        <option value={"littleChina"}>LittleChina</option>
                    </select>

                    <br/>

                    <label>
                        <input type={"checkbox"}

                               checked={props.data.isKosher}
                               name={"isKosher"}
                               onChange={props.handleChange}
                        />Restriction Area
                    </label>
                    <label>
                        <input type={"checkbox"}

                               checked={props.data.isLactose}
                               name={"isLactose"}
                               onChange={props.handleChange}
                        />Restriction Area
                    </label>
                    <label>
                        <input type={"checkbox"}

                               checked={props.data.isVagan}
                               name={"isVagan"}
                               onChange={props.handleChange}
                        />Restriction Area
                    </label>

                    <br/>
                    <button>Submit</button>
                </form>
                <footer>
                    <hr/>
                    <h2>Entered Information</h2>
                    <p>YourName: {props.data.firstName} {props.data.lastName}</p>
                    <p>YourAge: {props.data.age}</p>
                    <p>Gender: {props.data.gender}</p>
                    <p>Destination: {props.data.destination}</p>

                    <p>RestrictionKpsher: {props.data.isKosher? "Yes" : "No"}</p>
                    <p>RestrictionVagan: {props.data.isVagan? "Yes" : "No"}</p>
                    <p>RestrictionLactose: {props.data.isLactose? "Yes" : "No"}</p>
                </footer>
            </main>
        )
}
export default FormComponent