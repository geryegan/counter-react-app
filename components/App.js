import React, { Component } from 'react';
import Counter from './Counter';

require('../less/main.less');


class App extends Component {
    constructor() {
        super();
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            activeCounter: false            
        };
    }

    buttonTextRender() {
        if (this.state.activeCounter){
            return "Stop"
        } return "Start"
    }
    countButton() {
        let innerCount;
        this.setState({ activeCounter: !this.state.activeCounter }, () => {
            if (this.state.activeCounter) {
                innerCount = setInterval(() => {
                    this.setState({ seconds: this.state.seconds + 1 });
                    if (this.state.seconds === 60) {
                        this.setState({ minutes: this.state.minutes + 1, seconds: 0 });
                    }
                    if (this.state.minutes === 60) {
                        this.setState({ hours: this.state.hours + 1, minutes: 0 });
                    }
                    if (this.state.hours === 24) {
                        this.setState({ days: this.state.days + 1, hours: 0 });
                    }
                },1000);
                this.setState({ innerCount });
            } else if (!this.state.activeCounter){
                clearInterval(this.state.innerCount);
                this.setState({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                })
            }
        });
    }
    render() {
        return (
            <div className="flex-container">
                <Counter count={this.state.days} text="Days"/>
                <Counter count={this.state.hours} text="Hours"/>
                <Counter count={this.state.minutes} text="Minutes"/>
                <Counter count={this.state.seconds} text="Seconds"/>
            <button onClick={this.countButton.bind(this)} id="startButton">
                {this.buttonTextRender()}
            </button>
            </div>
        );
    }
}

export default App;
