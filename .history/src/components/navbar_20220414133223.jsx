import React, { Component } from 'react';
import Habits from './habits';

class Navbar extends Component {
    render() {
        return <nav className="navbar">
            <span className="navbar-title"> Habit Tracker </span>
            <span className="navbar-total-count">0</span>
        </nav>
    }
}

export default Navbar;