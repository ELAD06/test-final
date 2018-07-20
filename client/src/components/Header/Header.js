import React, { Component } from 'react';
import Searcher from '../Searcher';
import logo from '../../images/logo.png'
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="Header-container">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo"/>
        </div>
        <div className="searcher-wrapper">
          <Searcher onFetch={this.props.onFetchApi}/>
        </div>
      </header>
    );
  }
}
