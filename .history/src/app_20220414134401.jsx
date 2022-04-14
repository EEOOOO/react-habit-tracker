import React from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
class App extends Component {
  render() {
    return <>
    <Navbar total={}/>
    <Habits />
  </>
  }
}

export default App;
