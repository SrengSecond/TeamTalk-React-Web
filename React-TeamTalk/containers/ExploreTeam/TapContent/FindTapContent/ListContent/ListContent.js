import React from 'react';
import TagCollection from "../TagCollection/TagCollection";
import icon from "../icon/research.png";
import './ListContent.css'

function ListContent(props) {
    return (
        <div className={"list_content"}>
            <div className={"Left-content"}>
                    <h2 className={"main_title"}>Tower of Hanoi Simulation</h2>
                    <p className={"description_location"}>ITE - Project Research</p>
                    <TagCollection/>
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

export default ListContent;