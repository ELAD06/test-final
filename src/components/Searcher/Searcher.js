import React, { Component } from 'react';
import './Searcher.css';

class Searcher extends Component {
  render() {
    return (
      <div className="">
        <input type="text" placeholder="Buscar productos, marcas y más..." />
      </div>
    );
  }
}

export default Searcher;