import React from 'react';
import './FooterBar.css'
function FooterBar(props)
{
    const iconSize = ""
    return (
        <div>
            <footer className={"footer_bar"}>
                <p><i className={"fas fa-rocket fa-lg"}/>Join</p>
                <p> <i className="fas fa-save fa-lg"/>Bookmark</p>
                <p><i className="fas fa-satellite-dish fa-lg"/>Share</p>
                <p><i className="fas fa-meteor fa-lg"/> Report</p>
            </footer>
        </div>
    );
}

export default FooterBar;