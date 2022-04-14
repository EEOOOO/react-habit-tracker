import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count : 0,
    }
    handleIncrement = (event) => {
        this.setState({count : this.state.count + 1});
    }
    handleDecrement = (event) => {
        const count = this.state.count - 1;
        this.setState({count: count < 0? 0 : count});
    }
    render() {
        return <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">{this.state.count}</span>
            <button className="plus-button habit-button" onClick={this.handleIncrement}>➕</button>
            <button className="minus-button habit-button" onClick={this.handleDecrement}>➖</button>
            <button className="delete-button habit-button">❌</button>
        </li>
    }
}

export default Habit;