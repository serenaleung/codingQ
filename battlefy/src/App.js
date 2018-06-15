import React, { Component } from 'react';
import StudentDetails from './Components/StudentDetails.js'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div><StudentDetails/></div>
        {/* <div><Job/></div> */}
      </div>
    );
  }
}

export default App;
