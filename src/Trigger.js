import React, { useState, Fragment } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";

function Trigger(props) {
    const [alertState, setAlertState] = useState("info");
    const onChange = (event) => {
        const activeAlert = event.target.value;
        props.onChange(activeAlert);
        setAlertState(activeAlert);
    };
    const alertTypes = props.alertTypes.map((type) => {
        const text = type[0].toUpperCase() + type.slice(1);
        return (
            <MenuItem value={type} key={type}>
                {text}
            </MenuItem>
        );
    });
    return (
        <Fragment>
            <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Alert</InputLabel>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    label='Age'
                    value={alertState}
                    onChange={onChange}
                >
                    {alertTypes}
                </Select>
            </FormControl>
        </Fragment>
    );
}

Trigger.propTypes = {
    onChange: PropTypes.func.isRequired,
    alertTypes: PropTypes.array.isRequired,
};

export default Trigger;
