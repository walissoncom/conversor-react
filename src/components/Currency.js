import React, { Component } from 'react';

import './Currency.css';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import requests from '../requests';

export default class Currency extends Component {

    constructor(props) {
        super(props);

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
        const results = this.props.currencyList;
        const items = Object.keys(results);
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
                        options={items}
                        style={{ width: 285 }}
                        renderInput={(params) => <TextField {...params} label="Currency" variant="outlined" />}
                    />
                </div>
            </>
        );
    }
}