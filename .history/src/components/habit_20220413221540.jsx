import React, { Component } from 'react';

class Habit extends Component {
    render() {
        return <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">7</span>
            <button className="plus-button habit-button">➕</button>
            <button className="minus-button habit-button">➖</button>
            <button className="delete-button habit-button">❌</button>
        </li>
    }
}

export default Habit;