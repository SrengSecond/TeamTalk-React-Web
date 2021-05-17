import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './DetailTextFields.css'

function DetailTextFields(props)
{
    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {

                margin: theme.spacing(1),
                marginLeft: theme.spacing(props.marginLeftIn),
                width: /*'30ch'*/`${props.width}`,

                // height:`${props.height}`
            },
        },
    }));


    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) =>
    {
        setValue(event.target.value);
        console.log(value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    disabled={true}
                    value={props.value}
                    placeholder={props.placeholderTxt}
                    id="outlined-multiline-static"
                    label={props.title}
                    multiline
                    rows={4}
                    variant="outlined"
                />
            </div>
        </form>
    );
}
export default DetailTextFields;
