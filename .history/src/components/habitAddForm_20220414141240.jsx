import React, { Component } from 'react';

class HabitAddForm extends Component {
    onSubmit = event => {
        inputRef = React.createRef();
        event.preventDefault();
        console.log(event);
    }
    render() {
        return <form className="add-form" onSubmit={this.onSubmit}>
            <input 
            ref = {this.inputRef}
            type="text" 
            className="add-input" 
            placeholder="Habit" />
            <button className="add-button">Add</button>
        </form>
    }
}

export default HabitAddForm;