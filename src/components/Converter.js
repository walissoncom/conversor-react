import React, { Component } from 'react';

import './Converter.css';

import Currency from './Currency';

import requests from '../requests';

export default class Converter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currencyA: '',
            currencyB: '',
            currencyA_value: '',
            currencyB_value: 0
        }

        this.convert = this.convert.bind(this);
    }

    handleCurrencyA = (currencyValue) => {
        this.setState({ currencyA: currencyValue });
    }

    handleCurrencyB = (currencyValue) => {
        this.setState({ currencyB: currencyValue });
    }

    convert() {
        let from_to = `${this.state.currencyA}_${this.state.currencyB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=${requests.API_KEY}`;

        fetch(url).then(res => {
            return res.json();
        })
            .then(json => {
                let cotation = json[from_to];
                let currencyB_value = (parseFloat(this.state.currencyA_value) * cotation).toFixed(2);
                this.setState({ currencyB_value });
            });
    }

    render() {
        return (
            <div className="converter">
                <div className="row currency-selection">
                    <Currency parentCallback={this.handleCurrencyA} />
                    <span>TO</span>
                    <Currency parentCallback={this.handleCurrencyB} />
                </div>
                <div className="row">
                    <input type="text" onChange={(event) => { this.setState({ currencyA_value: event.target.value }) }} />
                    <button onClick={this.convert}>Convert</button>
                </div>
                <div className="row result">
                    <h2>{this.state.currencyB_value}</h2>
                </div>
            </div>
        )
    }
}