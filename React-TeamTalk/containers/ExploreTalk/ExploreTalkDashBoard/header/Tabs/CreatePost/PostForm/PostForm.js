import React from 'react';
import './PostForm.css'
import {useForm} from 'react-hook-form'
import './PostForm.css'
import ReactTooltip from "react-tooltip";
function PostForm(props)
{
    const { register, handleSubmit,getValues,formState:{errors} } = useForm();
    return(
        <div className={"PostForm"}>
            <div className="top">
                <input type="text"
                       className={"questionTitle"}
                       placeholder={"Enter Your Question Title Here"}
                       {...register("questionTitle",{required:"This field is required",maxLength:28})}/>

                <select placeholder={"Department"}
                        className={"department"}
                        {...register("department")}>
                    <option value={1}>BIOD</option>
                    <option value={2}>ITED</option>
                    <option value={3}>TTED</option>
                </select>

                <input type="text"
                       className={"tag-div"}
                       placeholder={"Tag"}
                       {...register("tag",{maxLength:28})}/>
            </div>

            <div className="middle">
                <textarea className={"textareaInput"}
                          // cols="28" rows="10"
                          placeholder="Describe your problem... (Optional)"
                          {...register("description")}
                />
            </div>

            <div className="bottom">
                <div className="iconButtons">

                    <div className="iconButton">
                        <i  data-tip data-for={"attachImage"} className="fas fa-file-image fa-lg" />
                        <ReactTooltip id="attachImage" place="top" effect="solid">
                            Attract Images
                        </ReactTooltip>
                    </div>

                    {/*<div className="iconButton">*/}
                    {/*<i data-tip data-for="registerTip" className="fas fa-file-image fa-lg"/>*/}
                    {/*<ReactTooltip id="registerTip" place="top" effect="solid">*/}
                    {/*    Tooltip for the register button*/}
                    {/*</ReactTooltip>*/}
                    {/*</div>*/}


                    <div className="iconButton">
                        <i data-tip data-for={"attachFile"}  className="fas fa-file-archive fa-lg"/>
                        <ReactTooltip id={"attachFile"} place={"top"}>
                            Attract file or Document
                        </ReactTooltip>
                    </div>
                </div>


                <div className="submit-div">
                    <p
                        className="submit-cancel"
                        data-tip data-for={"cancel"}
                    >Cancel</p>
                    <ReactTooltip id={"cancel"} place={"top"}>
                        Clear all the form input
                    </ReactTooltip>

                    <p className="space">or</p>
                    <button  className={"submit-Button"} type="submit">Post Now</button>
                </div>
            </div>

        </div>
    );
}

export default PostForm;