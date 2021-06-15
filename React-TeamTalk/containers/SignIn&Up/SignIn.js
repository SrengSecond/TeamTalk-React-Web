import React from 'react';
import './SingIn.css'
import  '../Home/Home.css'
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

const SignIn = () =>
{
    const { register, handleSubmit,getValues,formState:{errors} } = useForm();

    const onSubmit = (data,event) =>
    {
        console.log("[SignIn.js] Submit SignIn")
        event.target.reset();
        console.log(data);
    }
    return(
        <div className={"signIn-compoment"}>
            <div className="login-form">
                <h1 className={"login-Title"}>LOGIN FORM</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className={"input-label"} htmlFor="">Email</label><br/>
                    <input type="text"
                           required
                           className={"email"}
                           {...register("email",{required:"This field is required",maxLength:{value:28,message:"You exceeded the max 28 length"}})}
                    />
                    {errors.email && <p className={"errorsMessage"}>{errors.email.message}</p>}
                    <br/>

                    <label className={"input-label"} htmlFor="">Password</label><br/>
                    <input
                        required
                        type="password"
                        className={"password"}
                        {...register("password",{required:"This field is required",maxLength:{value:18,message:"You exceeded the max 18 length"}})}
                    />
                    <br/>

                    <div className={"form-footer"}>
                        <div className={"remember-check"}>
                            <input type="checkbox"/>
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <Link href="" to={'/forget_password'}>Forget Password ?</Link>
                    </div>

                    <br/>
                    <button className={"primary-button"} type={"submit"}> LOG IN</button>
                </form>

                    {/*<p className={"askingAccount_txt"}> Don't have account yet</p>*/}
                    <p className={"newline"}>OR</p>
                    <Link className={"registerLink"} to={'/register'}>
                        <button className={"primary-button"}> REGISTER</button>
                    </Link>
            </div>
        </div>
        /*            <div className="home-background">
                        <main className="home-Title">
                            <div className="title">
                                <h3>Welcome Again</h3>
                                <h4>We Glad You Come Here</h4>
                            </div>

                            <button className={"button-explore"}>
                                Home
                            </button>
                        </main>

                        <h1>
                            BACk
                        </h1>
                    </div>*/
    )
}
export default SignIn