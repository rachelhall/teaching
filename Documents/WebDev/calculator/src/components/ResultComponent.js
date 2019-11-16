import React, { Component } from 'react'

export default class ResultComponent extends Component {
    render() {

        let {result} = this.props;
        return (
            <div className="result">
                <h1>Calculator</h1>
                <p>{result}</p>
            </div>
        )
    }
}
