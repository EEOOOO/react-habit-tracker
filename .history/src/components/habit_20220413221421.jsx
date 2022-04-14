import React, { Component } from 'react';

class Habit extends Component {
    render() {
        return <>
            <span className="habit-name">Reading</span>
            <span className="habit-count">7</span>
            <button className="plus-button habit-button">➕</button>
            <button className="minus-button habit-button">➖</button>
            <button className="delete-button habit-button">❌</button>
        </>
    }
}

export default Habit;