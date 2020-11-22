import React, { Component } from 'react';

import './Currency.css';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import requests from '../requests';

export default class Currency extends Component {

    constructor() {
        super();

        this.state = {
            value: '',
            inputValue: '',
            error: null,
            isLoaded: false,
            results: []
        }
    }

    componentDidMount() {
        let url = `https://free.currconv.com/api/v7/currencies?apiKey=${requests.API_KEY}`;

        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    results: json.results
                });
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                });
    }

    sendData = (newValue) => {
        this.setState({ value: newValue });
        this.props.parentCallback(newValue);
    }

    render() {
        const { results } = this.state;
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