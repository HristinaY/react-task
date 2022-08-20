import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import PropTypes from 'prop-types';

const MyAlert = ({type, title, content}) => {

    return (
        <Alert severity={type}>
            <AlertTitle>{title}</AlertTitle>
            <span>{content}</span>
        </Alert>
    );
};

MyAlert.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string.isRequired
}

export default MyAlert;
