import React, { Component } from 'react';

export default class List extends  Component {
  render() {
    return (
      <ul>
        { this.props.results.map((item, index) => <li key={index}><code> {item.title} </code></li>)}
      </ul>
    );
  }
}
