import React from 'react';
import './Tag.css'
function Tag(props) {
    return (
        <div className="tag">
            <p className="tag-name">{props.name}</p>
        </div>
    );
}

export default Tag;