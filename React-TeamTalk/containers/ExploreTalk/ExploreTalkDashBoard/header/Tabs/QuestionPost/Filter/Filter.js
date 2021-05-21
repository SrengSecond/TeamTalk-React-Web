import React, {useState} from 'react';
import './Filter.css'
import MenuFilter from "./Menu/MenuFilter";

import MenuTab from "../../../MenuTabs/MenuTab/MenuTab";
import MenuTabs from "../../../MenuTabs/MenuTabs";
import MenuHover from "./Menu/MenuHover";


function Filter(props)
{
    const [Menu,SetMenu] = useState("Newest")
    const [hoverMenu,SetHoverMenu] = useState(false)

    const handleColorChange = (event) =>
    {
        SetMenu(event.target.name);
    }
    const handleHover = (event) =>
    {
        SetHoverMenu(prestate => !prestate)
    }

    return (
        <div className={"Filter"}>
            <div className={"Filter-clickable"}>
                    <MenuFilter SelectMenuName={Menu} targetName={"Newest"} title={"Newest"} linkto={"/exploreTalk/allQuestion/newest"} handleColorChange={handleColorChange}/>
                    <MenuFilter SelectMenuName={Menu} targetName={"Vote"} title={"Vote"} linkto={"/exploreTalk/allQuestion/vote"} handleColorChange={handleColorChange}/>
                    <MenuFilter SelectMenuName={Menu} targetName={"Unanswered"} title={"Unanswered"} linkto={"/exploreTalk/allQuestion/unanswered"} handleColorChange={handleColorChange}/>
                    <MenuHover handleHover={handleHover} SelectMenuName={Menu} targetName={"Department"} title={"Department"} type={"hover"}/>
            </div>

            <div className={hoverMenu?"Filter-hover":"Filter-hover-left"}>
                <MenuFilter className={"MenuFilter"} SelectMenuName={Menu} targetName={"BIOD"} title={"BIOD"} linkto={"/exploreTalk/allQuestion/BIOD"} handleColorChange={handleColorChange}/>
                <MenuFilter className={"MenuFilter"} SelectMenuName={Menu} targetName={"ITED"} title={"ITED"} linkto={"/exploreTalk/allQuestion/ITED"} handleColorChange={handleColorChange}/>
                <MenuFilter className={"MenuFilter"} SelectMenuName={Menu} targetName={"TTED"} title={"TTED"} linkto={"/exploreTalk/allQuestion/TTED"} handleColorChange={handleColorChange}/>
            </div>
        </div>
    );
}

export default Filter;