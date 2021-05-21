import React,{useState} from 'react';
import MenuTab from "./MenuTab/MenuTab";
import './MenuTaps.css'

function MenuTabs(props)
{
    const [Menu,SetMenu] = useState("TalkMore")
    const handleColorChange = (event) =>
    {
        SetMenu(event.target.name);
    }
    return (

        <div className={"MenuTaps"}>
            <MenuTab SelectMenuName={Menu} targetName={"TalkMore"} title={"TalkMore"} linkto={"/exploreTalk/allQuestion"} handleColorChange={handleColorChange}/>
            <MenuTab SelectMenuName={Menu} targetName={"MyQuestion"} title={"MyQuestion"} linkto={"/exploreTalk/myQuestion"} handleColorChange={handleColorChange}/>
        </div>
    );
}

export default MenuTabs;