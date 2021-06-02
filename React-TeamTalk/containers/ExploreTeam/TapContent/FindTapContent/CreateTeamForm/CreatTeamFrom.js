import React,{useState,useEffect,useRef} from 'react';
import LoadingOverlay from "react-loading-overlay";
import Selector from "../../../../Selector/Selector";
import * as Menu from "../../../../Selector/Menu";
import { useForm } from "react-hook-form";
import BounceLoader from 'react-spinners/BounceLoader'

function CreatTeamFrom(props)
{
    const { register, handleSubmit,getValues,formState:{errors} } = useForm();
    // console.log(errors)

    const [member,SetMember] = useState(1);
    const [isLoading,setLoading] = useState(false)


    useEffect(()=>
    {
        console.log("[CreateTeam.js] did Create")
    },[])

    useEffect(()=>
    {
        console.log("[CreateTeam.js] did Update")
    })

    const handleMemberSize = (e) =>
    {
        // SetMember(e.target.value)
        console.log(getValues())
    }
    const onSubmit = (data,e) =>
    {
        console.log(data)
        e.target.reset();
    };

    const handleCreateTeam = (data,event) =>
    {
        // console.log(event)
        console.log(data)

        setLoading(true)

        const timer = setTimeout(() =>
        {
            setLoading(false)
            {
                props.handleCloseCreate();
                event.target.reset();
            }
        }, 2000);
        return () => clearTimeout(timer);
    }

    return (
        <div className={props.isCreateTeam ? "creatTeam-PopUp-open" : "creatTeam-PopUp-close"}>
            <LoadingOverlay
                active={isLoading}
                spinner={<div><i className="fab fa-galactic-republic fa-spin fa-6x"/></div> }
                text='Create Your Team shortly...'>
                <div className="header">
                    <h3>Create Team</h3>
                    <div className={"i-div"} onClick={props.handleCloseCreate}>
                        <i className="fas fa-times fa-2x " />
                    </div>
                </div>



                <form onSubmit={handleSubmit(handleCreateTeam)}>
                    <div className="main">
                        <div className="left_input">
                            <div className="left_input-div">
                                <p> <b>Optional</b>: Tell everyone about your team</p>
                                <textarea className={"textareaInput"}
                                          cols="28" rows="8"
                                          placeholder="Describe your Project & Team here..."
                                          {...register("description")}
                                />

                                <p><b>Optional</b>: what is your required from member ?</p>
                                <textarea className={"textareaInput"}
                                          cols="28" rows="5"
                                          placeholder="What are you required from your team..."
                                          {...register("required")}
                                />

                                <div className={"button-div"}>
                                    <button type={'submit'}>Create Team</button>
                                </div>
                            </div>
                        </div>
                        <div className="right_input">
                            <div className="right_input-div">
                                <p>Give your team title</p>
                                <input required placeholder={"Team Title"} {...register("teamTitle",{required:"This is required",maxLength:{value:29,message:"You exceeded the max 28 length"}})}/>
                                {errors.teamTitle && <p>{errors.teamTitle.message}</p>}

{/*                                <label htmlFor="description">Description</label>
                                <input defaultValue={""} {...register("description",{required:"This is required"})}/>
                                {errors.description && <p>{errors.description.message}</p>}

                                <label htmlFor="member">Member</label>
                                <input {...register("member",{required:"This is required",maxLength:{value:4,message:"You exceeded the max length"}})}/>
                                {errors.member && <p>{errors.member.message}</p>}

                                <label htmlFor="age">Member</label>
                                <input {...register("age",{required:true,maxLength:3,valueAsNumber:true})}/>*/}

                                <p>Which department you target</p>
                                <select placeholder={"Department"} className={"select-Department"} {...register("department")}>
                                    <option value={1}>BIOD</option>
                                    <option value={2}>ITED</option>
                                    <option value={3}>TTED</option>
                                </select>

                                <p>Choose main activity you focus on</p>
                                <select placeholder={"Activity"} className={"select-Activity"} {...register("activity")}>
                                    <option value={1}>Assignment</option>
                                    <option value={2}>Lab</option>
                                    <option value={3}>Personal project</option>
                                    <option value={4}>Project practicum</option>
                                    <option value={5}>Research</option>
                                    <option value={6}>School project</option>
                                    <option value={6}>Hobby projects</option>
                                </select>


                                <p>How many member you want in your team ?</p>
                                {/*<input type="range" min="1" max="15" placeholder={"Member"} onChange={handleMemberSize} value={member} required/>*/}
                                <input type="number" placeholder={"Member Size"} min="1" max="15" {...register("memberSize",{required:true,maxLength:16, min:1, max:15})}/>
                                <p className={"memberSize"}>Maximum number:15 </p>

                                <p>Does anyone can join ?</p>
                                    <select placeholder={"Permission"} className={"select-Permission"} {...register("permission")}>
                                        <option value={1}>Open</option>
                                        <option value={2}>Ask</option>
                                    </select>

                                <p>Optional</p>
                                <input type="text" className={"optional_input"} placeholder={"Tag1, Tag2, ..."} {...register("tag")}/>

                                <input type="text" className={"optional_input"} placeholder={"Location - school - University"} {...register("location")}/>
                            </div>
                        </div>
                    </div>
                </form>
            </LoadingOverlay>
        </div>

    );
}

export default CreatTeamFrom;