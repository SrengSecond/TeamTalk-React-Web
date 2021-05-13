import React from 'react';
import './Member.css'

function Member(props) {
    return (
        <div>
            <div className="Member">
                <img src={props.iconUrl} alt=""/>
                <div className="txt-div">
                    <p className="name">{props.name}</p>

                    <div className={"txt-mini"}>
                        <div className="txt-mini-div">
                            <p>Department:</p>
                            <p className="placeholder">{props.department}</p>
                        </div>

                        <div className="txt-mini-div">
                            <p>Role:{}</p>
                            <p className="placeholder">{props.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Member;