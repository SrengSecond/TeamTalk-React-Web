import React from 'react';
import FilterBar from "./FilterBar/filterBar";
import SearchDiv from "./SearchDiv/SearchDiv";
import CreateButton from "./CreateButton/CreateButton";
import FindTapContent from "../TapContent/FindTapContent/FindTapContent";
import DetailTapContent from "../TapContent/FindTapContent/DetailTapContent";
import {connect} from "react-redux"
import './TeamDetail.css'
import Popup from "reactjs-popup";



function PostTeamDetail(props)
{
    const list = ["OpenGL-Vertex Shader","Research Physic"]

    return (
        <div className="headerTap_Find">

            <div className="header">
                <div className="headerTapContent">
                    <div className="headerTap_Find_top">
                        <SearchDiv/>
                        <CreateButton/>
                    </div>

                    <div className="headerTap_Find_bottom">
                        <FilterBar/>
                    </div>
                </div>
            </div>

            <div className={"mainContent"}>
                <div className="list">
                    <FindTapContent type={"post"} dataSet={props.postData} selectedTeam={props.selectedTeam}/>
                    {(props.DetailTeam != null) && <DetailTapContent dataSet={props.DetailTeam[0]}/>}
                </div>
            </div>

        </div>
    );
}
const mapStateToProps = (state) =>
{
    return{
        postData: state.AllPostTeam,
        selectedTeam:state.SelectPostTeam,
        DetailTeam:state.DetailPostTeam,
    }
}
export default  connect(mapStateToProps) (PostTeamDetail);