import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import FilterBar from "./FilterBar/filterBar";

function HeaderTapMy(props) {
    return (
        <div>
            My Team
            <FilterBar/>
        </div>
    );
}

export default HeaderTapMy;
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