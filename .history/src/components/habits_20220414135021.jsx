import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    
    handleIncrement = () => {
        this.props.onIncrement(habit);
    }
    handleDecrement = () => {
        this.props.onDecrement(habit);
    }
    handleDelete = () => {
        this.props.onDelete(habit);
    }
    render() {
        return (
        <ul>
            {
                this.props.habits.map(habit => (
                    <Habit 
                    key={habit.id} 
                    habit={habit}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    />
                ))
            }
        </ul>
        );
    }
}

export default Habits;