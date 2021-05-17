import React,{useState} from 'react';
import './DetailTapContent.css'
import './DetailTapContent_Margin.css'
import {Link} from "react-router-dom";
import ChipInput from 'material-ui-chip-input'
import TagCollection from "./TagCollection/TagCollection";
import MultilineTextFields from "./DetailTextFields/DetailTextFields";
import DatePicker from "./TimeDatePicker/DatePicker";
import icon from './icon/lab_Color.png'
import Members from "./Member/Members";
import MemberIcons from "./MemberIcon/MemberIcons";
import Scrollbar from "react-scrollbars-custom";
import FooterBar from "../../Footer/FooterBar";

function DetailTapContent(props)
{
    const exmapleMember = ["Sreng","Sal","Sal",null,null,null,null];

    const [yourChips,setChip] = useState()

    const handleAddChip = (chip) =>
    {
        //setChip(chips);

        setChip(chip)
        console.log("asd")
    }


    return (
        <div className="DetailTap-Content-div">
            <div className="DetailTap-Content-block-div">
                <div className="top-detail">
                    <div className="left-detail">
                        <div className="top-left-detail">
                            <h2>{props.dataSet.name}</h2>
                        </div>

                        <div className="middle-left-detail">
                            <img className={"activity_icon"} src={icon} alt=""/>

                            <div className="middle-left-detail-activity">
                                <div className="big-text-div">
                                    <div className={"text-div"}>
                                        <p className="label">Activity:</p>
                                        <p className={"value-holder"}>{props.activity}</p>
                                    </div>

                                    <div className={"text-div"}>
                                        <p className="label">Department:</p>
                                        <p className={"value-holder"}>{props.department}</p>
                                    </div>
                                </div>

                                <div className="small-text-div">


                                    <div className={"text-div"}>
                                        <p className="label">Target Member:</p>
                                        <p className={"value-holder"}>{props.memberSize}</p>
                                    </div>

                                    <div className={"text-div"}>
                                        <p className="label">Published:</p>
                                        <p className={"value-holder"}>{props.postDate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bottom-left-detail">

                            <p className={"value-holder"} >Contact: {props.dataSet.email} </p>
                            <div className={"text-div"}>
                                <p className="label">Tag:</p>
                                <p className={"value-holder"}> {props.tag}</p>
                            </div>

                        </div>
                    </div>
                    <div className="right-detail">

                        <div className="top-right-detail">
                            <div className="double-div">
                                <div className="first-text-div">
                                    <p className={"label"}>TeamOwn:</p>
                                    <p className={"value-holder"}>{props.teamOwner}</p>
                                </div>

                                <div className="second-text-div">
                                    <p className={"label"}>Permission:</p>
                                    <p className={"value-holder"}>{props.permission}</p>
                                </div>
                            </div>

                            <div className="text-div">
                                <p className={"label"}>Location:</p>
                                <p className={"value-holder"}>{props.location}</p>
                            </div>
                        </div>

                        <div className="middle-right-detail">
                            <p>Schedule</p>
                            <DatePicker date_title={"OpenDate"} time_title={"OpenTime"} setDisable={false}/>
                            <DatePicker date_title={"CloseDate"} time_title={"CloseTime"} setDisable={false}/>
                        </div>

                        <div className="bottom-right-detail">

                        </div>

                    </div>
                </div>

                <div className="middle-detail">
                    <MultilineTextFields value={props.value} title={"Description"} marginLeftIn={2} width={"49.7ch"}  placeholderTxt={"Describe something about this team..."}/>
                    <MultilineTextFields value={props.value}  title={"Required"} marginLeftIn={1}   width={"25ch"}  placeholderTxt={"what is the required for team"}/>
                </div>

                <div className="bottom-detail">
                    <div className="member_label">
                        <p className="current-member-number">Member</p>
                        <MemberIcons fontSize={"fa-lg"} className="member_list" member={exmapleMember}/>
                    </div>
                    <Members/>
                </div>

                <FooterBar/>
            </div>
        </div>
    );
}

export default DetailTapContent;