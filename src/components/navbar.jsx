import React, { PureComponent } from 'react';
import Habits from './habits';

class Navbar extends PureComponent {
    render() {
        return <nav className="navbar">
            <span className="navbar-logo">📝</span>
            <span className="navbar-title"> Habit Tracker </span>
            <span className="navbar-total-count">{this.props.totalCount}</span>
            <span className="navbar-count-text">개의 할 일 수행 완료</span>
        </nav>
    }
}

export default Navbar;