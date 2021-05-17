import React from 'react';
import TagCollection from "../TagCollection/TagCollection";
import icon from "../icon/research.png";
import './ListContent.css'
import MemberIcons from "../MemberIcon/MemberIcons";
import {connect} from "react-redux"
import * as ActionType from '../../../../../../store/action'
import {SELECTTEAM} from "../../../../../../store/action";
function ListContent(props)
{
    const exmapleMember = ["Sreng","Sal","Sal",null,null,null,null]
    return (

        <div className={props.selectedTeam === props.id? "list_content_Selected":"list_content"} onClick={() => props.handleClick(props.id,props.type)}>

                <div className={"Left-content"}>
                        <h2 className={"main_title"}>{props.title}</h2>
                        <p className={"description_location"}>ITE - Project Research</p>
                        <TagCollection/>
                        <MemberIcons fontSize={"fa-sm"} member={exmapleMember}/>
                        <div className={"description_post"}>

                            <div className={"text_dev"}>
                                <p className={"text_placeholder"}>By:</p>
                                <p className={"text_data"}>Jack</p>
                            </div>

                            <div className="text_dev">
                                <p className={"text_placeholder"}>Member:</p>
                                <p className={"text_data"}>5</p>
                            </div>

                            <div className="text_dev">
                                <p className={"text_placeholder"}>Published:</p>
                                <p className={"text_data"}>25 day ago</p>
                            </div>
                        </div>
                        {/*<p className="role_title">+ TeamOwner</p>*/}
                    </div>

                    <div className="Right-content">
                        <img className="activity_icon" src={icon} alt=""/>
                    </div>
            </div>
    );
}

const MapDispatchToProps = (dispatch) =>
{
    return {
        handleClick: (clickID,listType) => dispatch({type:ActionType.SELECTTEAM,id:clickID,listType:listType})
    }
}

export default connect(null,MapDispatchToProps) (ListContent);