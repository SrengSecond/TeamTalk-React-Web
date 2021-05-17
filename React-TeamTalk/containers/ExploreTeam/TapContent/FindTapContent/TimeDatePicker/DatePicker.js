import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import './DatePicker.css'


function DatePicker(props) {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState( /*new Date('2021-05-10T13:10:54')*/);

    const handleDateChange = (date) =>
    {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid className="grid-control" container justify="space-around" >
                <KeyboardDatePicker
                    className={"KeyboardDatePicker"}
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    disabled={props.setDisable}
                    label={props.date_title}
                    value={selectedDate}
                    onChange={handleDateChange}

                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}

                    // disabled

                />
                <KeyboardTimePicker
                    className={"KeyboardTimePicker"}
                    margin="normal"
                    id="time-picker"
                    disabled={props.setDisable}
                    label={props.time_title}
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}

                    // disabled

                />

            </Grid>

        </MuiPickersUtilsProvider>
    );
}
export default DatePicker;

