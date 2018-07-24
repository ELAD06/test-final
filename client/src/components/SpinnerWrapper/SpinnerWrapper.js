import React, { Component } from 'react';
import Snipper from 'react-spinkit';
import './SpinnerWrapper.css';

export default class SpinnerWrapper extends Component {
  render() {
    return(
      <Snipper 
        className="snipper-container"
        name="chasing-dots" 
        color={this.props.color || "white"}
      />
    );
  }
}