import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Menu.css'
import * as actionTypes from "../../../../../store/action";
import {connect} from "react-redux";


function Menu(props)
{
    return (
        <div className={props.SelectMenu === props.title? "Menu_selected": "Menu"}>
            <Link className={"Menu-item"}
                  onClick={() => props.handleClickMenu(props.title)}
                  to={'/find_team'}>{props.title}
            </Link>
        </div>
    );
}

const mapStateToProps = (state) =>
{
    return {
        SelectMenu: state.FindMenu
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return{
        handleClickMenu: (SelectMenuName)=> dispatch({type:actionTypes.SELECTMENU,menu:SelectMenuName})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);