import React from "react";
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import {Avatar, IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header ()
{
    return (
        <div className={"header"}>

            <div className={"header_left"}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/300px-Facebook_icon_2013.svg.png" alt=""/>
                <div className={"header_input"}>
                    <SearchIcon/>
                    <input type={"text"} placeholder={"Search Facebook"}/>
                </div>
            </div>

            <div className={"header_center"}>

                <div className="header_option
                header_option--active">
                    <HomeIcon fontSize="large"/>
                </div>

                <div className={"header_option"}>
                    <FlagIcon fontSize="large"/>
                </div>

                <div className={"header_option"}>
                    <StorefrontIcon fontSize="large"/>
                </div>

                <div className={"header_option"}>
                    <PermMediaIcon fontSize="large"/>
                </div>

                <div className={"header_option"}>
                    <MessageIcon fontSize="large"/>
                </div>
            </div>

            <div className={"header_right"}>
                <div className={"header_info"}>
                    <Avatar />
                    <h4>ZombieSlayer</h4>
                    <div>
                        <IconButton>
                            <AddIcon/>
                        </IconButton>

                        <IconButton>
                            <FormatAlignLeftIcon/>
                        </IconButton>

                        <IconButton>
                            <NotificationsIcon/>
                        </IconButton>

                        <IconButton>
                            <ExpandMoreIcon/>
                        </IconButton>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Header

/*
import React from "react";
function Header ()
{
    return (
        <div className={"header"}>

        </div>
    )
}
export default Header*/
