import React from "react";
import "./SideBar.css"
import SideBarRow from "./SideBarRow";
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoreIcon from '@material-ui/icons/Store';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function SideBar ()
{
    return (
        <div className={"sidebar"}>
            <SideBarRow src='https://image.flaticon.com/icons/png/512/216/216221.png' title={"Zombie Slayer"}/>
            <SideBarRow title={"Page"} Icon={EmojiFlagsIcon}/>
            <SideBarRow title={"Friend"} Icon={PeopleIcon}/>
            <SideBarRow title={"Massager"} Icon={ChatIcon}/>
            <SideBarRow title={"MarketPlace"} Icon={StoreIcon}/>
            <SideBarRow title={"Video"} Icon={VideoLibraryIcon}/>
            <SideBarRow title={"MarketPlace"} Icon={ExpandMoreIcon}/>

        </div>
    )
}
export default SideBar