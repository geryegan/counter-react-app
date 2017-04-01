import React, { Component } from 'react';

require('../less/main.less');


class Counter extends Component {
    render() {
        return(
            <div className="flex-item">
                <div className="counter">{this.props.count}</div>
                <div  className="label">
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default Counter;