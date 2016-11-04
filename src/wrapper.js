import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class AppHeader extends Component {
  render(){
    return (
      <div className="App-header">
        <div className='App-menu'></div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      )
    }
}

export default AppHeader;
