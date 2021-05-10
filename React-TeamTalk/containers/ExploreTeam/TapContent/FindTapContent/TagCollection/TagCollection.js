import React from 'react';
import Tag from "../Tag/Tag";
import './TagCollection.css'

function TagCollection(props) {
    return (
        <div className="tag_Collection">
            <Tag className={"tag"} name="javascript"/>
            <Tag className={"tag"} name="database"/>
            <Tag className={"tag"} name={"php"}/>
        </div>
    );
}

export default TagCollection;