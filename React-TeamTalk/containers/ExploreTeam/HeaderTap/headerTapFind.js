import React from 'react';
import FilterBar from "./FilterBar/filterBar";
import SearchDiv from "./SearchDiv/SearchDiv";
import CreateButton from "./CreateButton/CreateButton";
import './headerTapFind.css'
import FindTapContent from "../TapContent/FindTapContent/FindTapContent";
import DetailTapContent from "../TapContent/FindTapContent/DetailTapContent";


function HeaderTapFind(props)
{
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
                    <FindTapContent/>
                    <DetailTapContent/>
                </div>
            </div>

        </div>
    );
}

export default HeaderTapFind;