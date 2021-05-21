import React, {useState} from 'react';
import MenuFilter from "../../../../ExploreTalkDashBoard/header/Tabs/QuestionPost/Filter/Menu/MenuFilter";
import MenuHover from "../../../../ExploreTalkDashBoard/header/Tabs/QuestionPost/Filter/Menu/MenuHover";

function AnswerFilter(props) {
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
                <MenuFilter SelectMenuName={Menu} targetName={"Vote"} title={"Vote"} linkto={"/exploreTalk/allQuestion"} handleColorChange={handleColorChange}/>
                <MenuFilter SelectMenuName={Menu} targetName={"Newest"} title={"Newest"} linkto={"/exploreTalk/allQuestion"} handleColorChange={handleColorChange}/>
                <MenuFilter SelectMenuName={Menu} targetName={"Oldest"} title={"Oldest"} linkto={"/exploreTalk/allQuestion"} handleColorChange={handleColorChange}/>
            </div>
        </div>
    );
}
export default AnswerFilter;