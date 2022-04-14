import React, { Component } from 'react';
import Habits from './habits';

class Navbar extends Component {
    render() {
        return <nav className="navbar">
            <span className="navbar-logo">📝</span>
            <span className="navbar-title"> Habit Tracker </span>
            <span className="navbar-total-count">{this.props.totalCount}</span>
            <span className="navbar-count-text">개의 할 일 남음</span>
        </nav>
    }
}

export default Navbar;