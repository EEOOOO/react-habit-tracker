import React, { Component } from 'react';
import Habits from './habits';

class Navbar extends Component {
    render() {
        return <nav>
            <span> Habit Tracker </span>
            <span className="habit-total-count">0</span>
        </nav>
    }
}

export default Navbar;