import React,{useState} from 'react';
import './DetailTapContent.css'
import './DetailTapContent_Margin.css'
import {Link} from "react-router-dom";
import ChipInput from 'material-ui-chip-input'
import TagCollection from "./TagCollection/TagCollection";
import MultilineTextFields from "./DetailTextFields/DetailTextFields";
import DatePicker from "./TimeDatePicker/DatePicker";
import icon from './icon/learning.png'


function DetailTapContent(props)
{
    const [yourChips,setChip] = useState()

    const handleAddChip = (chip) =>
    {
            // // setChip(chips);
            setChip(chip)
            console.log("asd")
    }

    const handleDeleteChip = (chips,index) =>
    {

    }

    return (
        <div className="DetailTapContent">
            <div className="left-detail">
                <div className="top-left-detail">
                    <h2>Tower of Hanoi Simulation</h2>
                </div>

                <div className="middle-left-detail">
                    <img className={"activity_icon"} src={icon} alt=""/>

                    <div className="middle-left-detail-activity">
                        <div className="big-text-div">
                            <div className={"text-div"}>
                                <p className="label">Activity:</p>
                                <p className={"value-holder"}>Project Research</p>
                            </div>
                        </div>

                        <div className="small-text-div">
                            <div className={"text-div"}>
                                <p className="label">Department:</p>
                                <p className={"value-holder"}>ITE</p>
                            </div>

                            <div className={"text-div"}>
                                <p className="label">Target Member:</p>
                                <p className={"value-holder"}>5</p>
                            </div>

                            <div className={"text-div"}>
                                <p className="label">Published:</p>
                                <p className={"value-holder"}>3 day ago</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-left-detail">
                    <p className={"value-holder"} >Contact: ZombieSlayer@gmail.com</p>

                    <div className={"text-div"}>
                        <p className="label">Tag:</p>
                        <p className={"value-holder"}> C++, MatLab, Qt</p>
                    </div>

                    <MultilineTextFields title={"Description"} width={"35ch"} placeholderTxt={"Describe something about this team..."}/>
                </div>
            </div>

            <div className="right-detail">
                <div className="top-right-detail">
                    <div className="double-div">
                        <div className="first-text-div">
                            <p className={"label"}>TeamOwn:</p>
                            <p className={"value-holder"}>Benz</p>
                        </div>

                        <div className="second-text-div">
                            <p className={"label"}>Permission:</p>
                            <p className={"value-holder"}>Open Public</p>
                        </div>
                    </div>

                    <div className="text-div">
                        <p className={"label"}>Location:</p>
                        <p className={"value-holder"}>Phnom Penh, RUPP University</p>
                    </div>
                </div>

                <div className="middle-right-detail">
                    <DatePicker date_title={"OpenDate"} time_title={"OpenTime"} setDisable={false}/>
                    <DatePicker date_title={"CloseDate"} time_title={"CloseTime"} setDisable={false}/>
                </div>

                <div className="bottom-right-detail">
                    <MultilineTextFields title={"Required"} width={"25ch"} placeholderTxt={"what is the required for team"}/>
                </div>
            </div>
        </div>
    );
}

export default DetailTapContent;