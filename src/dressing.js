import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import logo from './logo.svg';
import './App.css';


export class AppHeader extends Component {
  constructor(props){
    super(props)
    this.state= {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this.handleChildUnmount = this.handleChildUnmount.bind(this);
  }
  handleChildUnmount(){
      this.setState({showComponent: false});
  }
  _onButtonClick() {
  this.setState({
    showComponent: true,
    });
  }
  render(){
    return (
      <div className="App-header">
        <div className='App-menu' onClick={this._onButtonClick}></div>
        {this.state.showComponent ?
          <AppMenu unmountMe={this.handleChildUnmount} /> :
          null
       }
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      )
    }
}

export class AppMenu extends Component{
  constructor(props){
    super(props)
    this.dismiss = this.dismiss.bind(this);
  }
   dismiss() {
       this.props.unmountMe();
   }
  render(){
    return(
      <div className='menu-render'>
        <div className='menu-container'>
          <div className='menu-header'>
            <span>MENU</span>
          </div>
        </div>
        <div className='modal-mask' onClick={this.dismiss}>
        </div>
      </div>
    )
  }
}
