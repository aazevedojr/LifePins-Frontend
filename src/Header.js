import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
				<h1><img id="logo" src="logo.png"/> AidPins</h1>
      </div>
    );
  }
}

export default Header;
