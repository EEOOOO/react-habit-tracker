import React, { Component } from 'react';
import Habits from './habits';

class Navbar extends Component {
    render() {
        return <nav className="navbar">
            <span className="Navbar-logo">📝</span>
            <span className="navbar-title"> Habit Tracker </span>
            <span className="navbar-total-count">{this.props.totalCount}</span>
            <span className="count-span">개</span>
        </nav>
    }
}

export default Navbar;