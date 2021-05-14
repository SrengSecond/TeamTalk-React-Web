import React from 'react';
import './MemberIcon.css'
function MemberIcon(props) {
    return (
        <div className={props.classes}>
            <i className="fas fa-user-astronaut fa-sm"/>
        </div>
    );
}

export default MemberIcon;