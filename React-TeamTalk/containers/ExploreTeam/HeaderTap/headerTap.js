import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import HeaderTapFind from "./headerTapFind";
import HeaderTapMy from "./headerTapMy";
import  "./headerTap.css"
function HeaderTap(props)
{

    return (
        <div className={"HeaderTap"}>
                <div className="headerTap-Content">
                    <div className={"tap-item-div"}>
                        <Link  className={"tap-item"} to={'/find_team'}>FindTeam</Link>
                    </div>
                    <div className={"tap-item-div"} >
                        <Link  className={"tap-item"} to={'/my_team'}>MyTeam</Link>
                    </div>
                </div>

                    <div className={"tap-container"} >
                        <div className={"tap-content"}>
                            <Route path={'/find_team'} component={HeaderTapFind}/>
                            <Route path={'/my_team'} component={HeaderTapMy}/>
                        </div>
                    </div>

        </div>
    );
}

export default HeaderTap;