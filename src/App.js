import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const test = <h1>Hello, world</h1>;



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  };
  handleChange(event) {
     this.setState({value: event.target.value});
   };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.value}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br></br>
          <input
            label='enter title'
            value={this.state.value}
            onChange={this.handleChange}>
          </input>
        </p>
      </div>
    );
  }
};





export default App;
