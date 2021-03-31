import React,{useState} from "react";
import './MessageSender.css'
import {Avatar} from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
function MessageSender()
{
    const [input,setInput] = useState("");
    const [imageURL,setImgURL] = useState("");
    const handleInputChange = (e) =>
    {
        setInput(e.target.value);
    }

    const handleImgChange = (e) =>
    {
        setImgURL(e.target.value);
    }
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        //TODO database

        setInput("");
        setImgURL("");
    }

    return (
        <div className="messageSender">
            <div className="messageSender_top">
            <Avatar/>

            <form action="">
                <input className="messageSender__input"
                       value={input}
                       onChange={handleInputChange}
                       type="text"
                       placeholder="What on your mind"
                />
                <input type="text"
                       value={imageURL}
                       onChange = {handleImgChange}
                       placeholder={"image URL (Optional)"}
                />
                <button onClick={handleSubmit} type={"submit"}>
                    Hidden Button
                </button>

            </form>

            </div>


            <div className="messageSender_bottom">
                <div className={"messageSender__optional"}>
                    <VideocamIcon style={{color: "white"}}/>
                    <h3>Live Video</h3>
                </div>

                <div className={"messageSender__optional"}>
                    <PhotoLibraryIcon style={{color: "white"}}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className={"messageSender__optional"}>
                    <InsertEmoticonIcon style={{color: "white"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}
export default MessageSender