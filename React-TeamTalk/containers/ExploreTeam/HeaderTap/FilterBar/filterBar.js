import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import './filterBar.css'


const useStyles = makeStyles((theme) => ({
    formDeptControl: {
        width:300,
        margin: theme.spacing(1),
        minWidth: 120,

    },
    formActivityControl: {
        width:300,
        margin: theme.spacing(1),
        minWidth: 120,
    },
    formPerControl: {
        width:100,
        margin: theme.spacing(1),
    },
    formTimeControl: {

        width:150,
        margin: theme.spacing(1),
    },

    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    nativeSelect_Class: {

        // backgroundColor:"var(--primary)",
        // color:"#fff"
        // '&:hover':
        //     {
        //
        //         backgroundColor:"#d93b3b"
        //     }
    },
    options: {
        '&:checked':
            {

            backgroundColor:"#d93b3b"
            }
    }
    // selector:
    //     {
    //         '&:hover':
    //             {
    //                 backgroundColor:"var(--primary)",
    //                 color:"#fff"
    //         },
    //     }
}));

export default function NativeSelects() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        department: '',
        activity: '',
        permission: '',
        uploadTime: '',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <div className={"filterBar"}>
            <FormControl className={classes.formDeptControl}>
                <InputLabel shrink htmlFor="department-native-label-placeholder">
                    Department
                </InputLabel>
                <NativeSelect
                    className={classes.nativeSelect_Class}
                    value={state.department}
                    onChange={handleChange}
                    inputProps={{
                        name: 'department',
                        id: 'department-native-label-placeholder',
                    }}>
                    <option className={classes.options} value="">All Department</option>
                    <option className={classes.options} value={"biod"}>BIOD</option>
                    <option className={classes.options} value={"ited"}>ITED</option>
                    <option className={classes.options} value={"tted"}>TTED</option>
                </NativeSelect>

            </FormControl>

            <FormControl className={classes.formActivityControl}>
                <InputLabel shrink htmlFor="activity-native-label-placeholder">Activity</InputLabel>
                <NativeSelect
                    value={state.activity}
                    onChange={handleChange}
                    inputProps={{
                        name: 'activity',
                        id: 'activity-native-label-placeholder',
                    }}
                >

                    <option value={""}>All Activity</option>
                    <option value={"assigment"}>Assigment</option>
                    <option value={"lab"}>Lab</option>
                    <option value={"school project"}>School project</option>
                    <option value={"project practicum"}>Project practicum</option>
                    <option value={"hobby projects"}>hobby projects</option>
                    <option value={"personal project"}>Personal project</option>
                    <option value={"research"}>Research</option>
                </NativeSelect>

            </FormControl>

            <FormControl className={classes.formPerControl}>
                <InputLabel shrink htmlFor="permission-native-label-placeholder">Permission</InputLabel>
                <NativeSelect

                    value={state.permission}
                    onChange={handleChange}
                    inputProps={{
                        name: 'permission',
                        id: 'permission-native-label-placeholder',
                    }}
                >
                    <option value={""}>All Type</option>
                    <option value={"join"}>Join </option>
                    <option value={"ask"}>Ask</option>
                </NativeSelect>

            </FormControl>

            <FormControl className={classes.formTimeControl}>
                <InputLabel shrink htmlFor="activity-native-label-placeholder">Time</InputLabel>
                <NativeSelect  className={classes.selector}
                    value={state.uploadTime}
                    onChange={handleChange}
                    inputProps={{
                        name: 'uploadTime',
                        id: 'activity-native-label-placeholder',
                    }}
                >

                    <option value={""}>Any Time</option>
                    <option value={"last hour"}>Last hour</option>
                    <option value={"today"}>Today</option>
                    <option value={"this Week"}>This Week</option>
                    <option value={"this Month"}>This Month</option>
                </NativeSelect>

            </FormControl>

            {/*<div>selectDepar{state.department}</div>*/}
            {/*<div>selectActivity{state.activity}</div>*/}
            {/*<div>selectActivity{state.permission}</div>*/}
            {/*<div>selectActivity{state.uploadTime}</div>*/}
        </div>
    );
}




