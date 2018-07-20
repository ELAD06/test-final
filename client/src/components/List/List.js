import React, { Component } from 'react';
import './List.css';

export default class List extends  Component {
  render() {
    return (
      <ul className="list-container">
        { this.props.results.map((item, index) => <li className='item-container' key={index}><code> {item.title} </code></li>)}
      </ul>
    );
  }
}