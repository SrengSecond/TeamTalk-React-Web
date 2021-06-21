import React from 'react';
import './SignUp.css'
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

const SignUp = () =>
{
    const { register, handleSubmit,getValues,formState:{errors} } = useForm();

    const onSubmit = (data,e) =>
    {
        console.log(data)
        e.target.reset();
    }
    return(
        <div className="signUp-component">
            <div className={"signUp-form"}>
                <h1 className={"form-title"}>REGISTRATION FORM</h1>
                <div className="registration-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">Name</label>

                        <input className={"first-name-col"}
                               required
                               type="text"
                               {...register("firstName",{required:"This field is required",maxLength:{value:18,message:"You exceeded the max 18 length"}})}
                        />

                        {errors.firstName && <p>{errors.email.message}</p>}

                        <input
                            className={"last-name-col"}
                            required

                            type="text"
                            {...register("lastName",{required:"This field is required",maxLength:{value:18,message:"You exceeded the max 18 length"}})}
                        />

                        {errors.lastName && <p>{errors.email.message}</p>}

                        <label className={"first-name-label"}>First Name</label>
                        <label className={"last-name-label"}>Last Name</label>

                        {/*<label htmlFor="">School</label>*/}
                        {/*<input type="text"/>*/}

                        {/*<label htmlFor="">Major</label>*/}
                        {/*<input className={"major"} type="text"/>*/}

                        {/*<label className={"year-label"} htmlFor="">Year</label>*/}
                        {/*<input className={"year"} type="number"/>*/}

                        <label htmlFor="">Email</label>

                        <input
                            type="email"
                            required

                            {...register("email",{required:"This field is required",maxLength:{value:28,message:"You exceeded the max 28 length"}})}
                        />

                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            required

                            {...register("password",{required:"This field is required",maxLength:{value:28,message:"You exceeded the max 28 length"}})}
                        />

                        <label htmlFor="">Confirm</label>
                        <input
                            type="Password"
                            required
                            {...register("conPassword",{required:"This field is required",maxLength:{value:28,message:"You exceeded the max 28 length"}})}
                        />

                        {/*<label htmlFor="">Phone</label>*/}
                        {/*<input type="number"/>*/}

                        <Link to={'/register/profile'}>
                            <button className={"submit-button"} type="submit">CONFIRM</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignUp