import React, {Component} from 'react';
import {Fragment} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import PropTypes from 'prop-types';

class Trigger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alertState: 'info',
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        let activeAlert = event.target.value;
        this.props.onChange(activeAlert);
        this.setState({
            alertState: activeAlert
        });
    }

    render() {
        return (
            <Fragment>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Alert</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        value={this.state.alertState}
                        onChange={this.onChange}
                    >
                        <MenuItem value={'info'}>Info</MenuItem>
                        <MenuItem value={'warning'}>Warning</MenuItem>
                        <MenuItem value={'error'}>Error</MenuItem>
                    </Select>
                </FormControl>
            </Fragment>
        )
    }
}
Trigger.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default Trigger;

