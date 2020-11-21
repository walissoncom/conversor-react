import React, { Component } from 'react';

import './Currency.css';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'

const options = ['USD', 'AUD', 'BRL'];

export default class Currency extends Component {

    constructor() {
        super();

        this.state = {
            value: '',
            inputValue: ''
        }
    }

    sendData = (newValue) => {
        this.setState({ value: newValue });
        this.props.parentCallback(newValue);
    }

    render() {
        return (
            <>
                <div>
                    <Autocomplete
                        value={this.state.value}
                        onChange={(e, newValue) => {
                            this.sendData(newValue);
                        }}
                        inputValue={this.state.inputValue}
                        onInputChange={(e, newInputValue) => {
                            this.setState({ inputValue: newInputValue });
                        }}
                        options={options}
                        defaultValue={options[0]}
                        style={{ width: 285 }}
                        renderInput={(params) => <TextField {...params} label="Currency" variant="outlined" />}
                    />
                </div>
            </>
        );
    }
}