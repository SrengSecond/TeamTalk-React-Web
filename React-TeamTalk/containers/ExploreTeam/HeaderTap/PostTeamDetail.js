import React from 'react';
import FilterBar from "./FilterBar/filterBar";
import SearchDiv from "./SearchDiv/SearchDiv";
import CreateButton from "./CreateButton/CreateButton";
import FindTapContent from "../TapContent/FindTapContent/FindTapContent";
import DetailTapContent from "../TapContent/FindTapContent/DetailTapContent";
import './TeamDetail.css'


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
                    <FindTapContent dataSet={list}/>
                    <DetailTapContent/>
                </div>
            </div>

        </div>
    );
}

export default PostTeamDetail;