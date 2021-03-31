import React from "react";
import "./StoryReel.css"
import Story from "./Story";
function StoryReel ()
{
    return (
        <div className={"storyReel"}>
            {/*message*/}
            <Story
                img={"https://i.ytimg.com/vi/lTRiuFIWV54/maxresdefault.jpg"}
                profileSrc={"https://www.w3schools.com/w3images/avatar6.png"}
                title={"Jane"}
            />
            <Story
                img={"https://i.ytimg.com/vi/yUpl_HQrBnM/maxresdefault.jpg"}
                profileSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9UI1y4Shr253ibETjPCOWNBWWpKgQsVKaw&usqp=CAU"}
                title={"MR Hand Janene"}
            />

            <Story
                img={"https://i.ytimg.com/vi/5yx6BWlEVcY/maxresdefault.jpg"}
                profileSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXp3DxP80ArpRzsB0XWBG9Ow5GeuefbLrUHw&usqp=CAU"}
                title={"Dave"}
            />

            <Story
                img={"https://i.ytimg.com/vi/pdtlWroFee0/maxresdefault.jpg"}
                profileSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU"}
                title={"Eva"}
            />

            <Story
                img={"https://i.ytimg.com/vi/yUpl_HQrBnM/maxresdefault.jpg"}
                profileSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9UI1y4Shr253ibETjPCOWNBWWpKgQsVKaw&usqp=CAU"}
                title={"MR Hand Janene"}
            />

        </div>
    )
}
export default StoryReel