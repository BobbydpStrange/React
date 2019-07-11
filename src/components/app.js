// Imports the `React` module and the `Component` class from that module.
import React, { Component } from 'react';
import moment from "moment";

// Creates an `App` class that is a child of the `Component` class.
class App extends Component {

  render() {
    
    return (

      <div className='app'>
        <h1>Aubrey Oblads Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
      </div>

    );
  }
}

export default App;
