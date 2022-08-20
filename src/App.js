import React, {Component} from 'react';
import MyAlert from './MyAlert';
import {Stack, Typography} from '@mui/material';
import Trigger from './Trigger';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            warning: false,
            info   : false,
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        var info = true;
        this.setState({info: info})
    }

    onChange(value) {
        value === 'warning' ? this.setState({warning: true}) : this.setState({warning: false});
        value === 'info' ? this.setState({info: true}) : this.setState({info: false});
    }

    render() {
        return (
            <>
                <Stack sx={{width: '600px', padding: '20px'}} spacing={2}>
                    <Typography variant={'h4'}>Alerts</Typography>
                    {
                        this.state.warning && <MyAlert
                            type={'warning'}
                            title={'Warning'}
                            content={'This is a warning message'}
                        />
                    }
                    {
                        this.state.info && <MyAlert
                            type={'info'}
                            title={'Information'}
                            content={'This is a information message'}
                        />
                    }
                    <Trigger onChange={this.onChange}/>
                </Stack>

            </>
        );
    }
};

export default App;
