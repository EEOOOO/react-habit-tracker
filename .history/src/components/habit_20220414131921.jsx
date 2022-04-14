import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count : 0,
    }
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    }
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }
    render() {
        const {name, count} = this.props.habit;
        return <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="plus-button habit-button" onClick={this.handleIncrement}>➕</button>
            <button className="minus-button habit-button" onClick={this.handleDecrement}>➖</button>
            <button className="delete-button habit-button" onClick={this.handleDelete}>❌</button>
        </li>
    }
}

export default Habit;