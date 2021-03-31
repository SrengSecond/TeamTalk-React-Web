import React from "react";
import "./Feed.css"
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed ()
{
    return (
        <div className={"feed"}>
            <StoryReel/>
            <MessageSender/>

            <Post
                profilePic={"https://pbs.twimg.com/profile_images/1236608518347788295/IaKy3w-m_400x400.png"}
                username={"ZombieSlayer"}
                timestamp={"Date: 12 second ago"}
                message={"Chill pop"}
                image={"https://i.ytimg.com/vi/lTRiuFIWV54/maxresdefault.jpg"}
            />            <Post
                profilePic={"https://pbs.twimg.com/profile_images/1236608518347788295/IaKy3w-m_400x400.png"}
                username={"ZombieSlayer"}
                timestamp={"Date: 12 second ago"}
                message={"Chill pop"}
                /*image={"https://i.ytimg.com/vi/lTRiuFIWV54/maxresdefault.jpg"}*/
            />
            <Post
                profilePic={"https://pbs.twimg.com/profile_images/1236608518347788295/IaKy3w-m_400x400.png"}
                username={"ZombieSlayer"}
                timestamp={"Date: 12 second ago"}
                message={"Chill pop"}
                image={"https://www.synopsys.com/blogs/software-security/wp-content/uploads/2020/07/protect-your-website-from-embedded-content-iframe-security-8.jpg"}
            />

            <Post/>
            <Post/>
            <Post/>
{/*            <Post
                profilePic={}
                username={}
                timestamp={}
                message={}
                image={}
            />*/}



        </div>
    )
}
export default Feed