import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count : 0,
    }
    handleIncreament = (event) => {
        console.log('plus button click')
    }
    render() {
        return <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">{this.state.count}</span>
            <button className="plus-button habit-button" onClick={this.handleIncreament}>➕</button>
            <button className="minus-button habit-button">➖</button>
            <button className="delete-button habit-button">❌</button>
        </li>
    }
}

export default Habit;