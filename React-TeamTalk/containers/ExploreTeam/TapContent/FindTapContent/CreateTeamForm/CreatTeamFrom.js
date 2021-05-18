import React,{useState,useEffect,useRef} from 'react';
import LoadingOverlay from "react-loading-overlay";
import Selector from "../../../../Selector/Selector";
import * as Menu from "../../../../Selector/Menu";
import { useForm } from "react-hook-form";

function CreatTeamFrom(props)
{
    const { register, handleSubmit,formState:{errors} } = useForm();
    console.log(errors)

    const [member,SetMember] = useState(1);

    const prevLoadingRef = useRef()
    useEffect(()=>
    {
        prevLoadingRef.current = member
    })
    const prevLoading = prevLoadingRef.current
    console.log("now "+member + " before " + prevLoading)

    useEffect(()=>
    {
        console.log("[CreateTeam.js] did Create")

    },[])

    const handleMemberSize = (e) =>
    {
        SetMember(e.target.value)
    }
    const onSubmit = (data,e) =>
    {
        e.target.reset();
        console.log(data)
    };

    console.log("[CreateTeam.js] did Update")
    return (
        <div className={props.isCreateTeam ? "creatTeam-PopUp-open" : "creatTeam-PopUp-close"}>
            <LoadingOverlay
                active={props.isLoading}
                spinner
                text='Create Your Team shortly...'>
                <div className="header">
                    <h3>Create Team</h3>
                    <div className={"i-div"} onClick={props.handleCloseCreate}>
                        <i className="fas fa-times fa-2x" />
                    </div>
                </div>



                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="main">
                        <div className="left_input">
                            <div className="left_input-div">
                                <p> <b>Optional</b>: Tell everyone about your team</p>
                                {/*<MultilineTextFields height={"200px"} title={"Description"} marginLeftIn={1}  width={"30ch"}  placeholderTxt={"Describe something about this team..."}/>*/}
                                <textarea className={"textareaInput"}  name={"description"} cols="28" rows="8" placeholder="Describe your Project & Team here..."/>

                                <p><b>Optional</b>: what is your required from member ?</p>
                                {/*<MultilineTextFields  title={"Required"} marginLeftIn={1} width={"30ch"}  placeholderTxt={"What are you required from your team..."}/>*/}
                                <textarea className={"textareaInput"} name={"required"} cols="28" rows="6" placeholder="What are you required from your team..."/>

                                <div className={"button-div"}>
                                    <button type={'submit'}>Create Team</button>
                                </div>
                            </div>
                        </div>
                        <div className="right_input">
                            <div className="right_input-div">
                                <p>Give your team title</p>
                                <input type="text" placeholder={"Team Title"}/>

                                {/*<label htmlFor="description">Description</label>*/}
                                {/*<input defaultValue={""} {...register("description",{required:"This is required"})}/>*/}
                                {/*{errors.description && <p>{errors.description.message}</p>}*/}

                                {/*<label htmlFor="member">Member</label>*/}
                                {/*<input {...register("member",{required:"This is required",maxLength:{value:4,message:"You exceeded the max length"}})}/>*/}
                                {/*{errors.member && <p>{errors.member.message}</p>}*/}

                                {/*<label htmlFor="age">Member</label>*/}
                                {/*<input {...register("age",{required:true,maxLength:3,valueAsNumber:true})}/>*/}

                                <p>Which department you focus on</p>
                                <div className={"selector"}>
                                    <Selector  txtholder={"Department"} menu={Menu.options_Department} required/>
                                </div>

                                <div className={"selector"}>
                                    <Selector  txtholder={"Activity"} menu={Menu.options_Activity} required/>
                                </div>

                                <p>How many member you want in your team ?</p>
                                <input type="range" min="1" max="15" placeholder={"Member"} onChange={handleMemberSize} value={member} required/>
                                <p className={"memberSize"}>Member: {member} </p>

                                <p>Does anyone can join ?</p>
                                <div className={"selector"}>
                                    <Selector txtholder={"Permission"} menu={Menu.Options_Permission}/>
                                </div>

                                <p>Optional</p>
                                <input type="text" placeholder={"Add Tags"}/>
                                <br/>
                                <input type="text" placeholder={"Location - school - University"}/>
                            </div>
                        </div>
                    </div>
                </form>
            </LoadingOverlay>
        </div>

    );
}

export default CreatTeamFrom;