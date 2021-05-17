import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import FilterBar from "./FilterBar/filterBar";
import SearchDiv from "./SearchDiv/SearchDiv";
import CreateButton from "./CreateButton/CreateButton";
import FindTapContent from "../TapContent/FindTapContent/FindTapContent";
import DetailTapContent from "../TapContent/FindTapContent/DetailTapContent";
import {connect} from "react-redux"
import './TeamDetail.css'

function PostedTeamDetail(props)
{

    return (
        <div className="headerTap_Find">

            <div className="header">
                <div className="headerTapContent">
                    <div className="headerTap_Find_top">
                        <SearchDiv/>
                        <CreateButton/>
                    </div>

                    <div className="headerTap_Find_bottom">
                        <FilterBar/>
                    </div>
                </div>
            </div>

            <div className={"mainContent"}>
                <div className="list">
                    <FindTapContent type={"posted"} dataSet={props.postedData} selectedTeam={props.selectedTeam}/>
                    {(props.DetailTeam != null) && <DetailTapContent dataSet={props.DetailTeam[0]}/>}

                </div>
            </div>

        </div>
    );
}
const mapStateToProps = (state) =>
{
    return{
        postedData: state.AllPostedTeam,
        selectedTeam:state.SelectPostedTeam,
        DetailTeam: state.DetailPostedTeam

    }
}
export default connect(mapStateToProps)(PostedTeamDetail);
// <FormControl className={classes.formControl}>
//     <InputLabel shrink htmlFor="age-native-label-placeholder">
//         Department
//     </InputLabel>
//     <NativeSelect
//         value={state.age}
//         onChange={handleChange}
//         inputProps={{
//             name: 'age',
//             id: 'age-native-label-placeholder',
//         }}
//     >
//         <option value="">All Department</option>
//         <option value={"BIOD"}>BIOD</option>
//         <option value={"ITED"}>ITED</option>
//         <option value={"TTED"}>TTED</option>
//     </NativeSelect>
//
// </FormControl>
//
// <FormControl className={classes.formControl}>
//     <InputLabel shrink htmlFor="age-native-label-placeholder">
//         Activity
//     </InputLabel>
//     <NativeSelect
//         value={state.age}
//         onChange={handleChange}
//         inputProps={{
//             name: 'age',
//             id: 'age-native-label-placeholder',
//         }}
//     >
//         <option value="">All Activity</option>
//         <option value={"Assigment"}>Assigment</option>
//         <option value={"Lab"}>Lab</option>
//         <option value={"School project"}>School project</option>
//         <option value={"Project practicum"}>Project practicum</option>
//         <option value={"hobby projects"}>hobby projects</option>
//         <option value={"Personal project"}>Personal project</option>
//         <option value={"Research"}>Research</option>
//
//     </NativeSelect>
//
// </FormControl>