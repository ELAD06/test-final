import React, { Component } from 'react';
import './Searcher.css';

class Searcher extends Component {
  constructor() {
    super();
    // 2. La solucion es entrelazar o "bindear" lo que necesito a mi clase usando el metodo .bind()
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
  }

  state = {
    placeholder: 'Buscar productos, marcas y más...',
    data: '',
    isValid: false,
  };

  onSearchClick(event) {
    event.stopPropagation();
    if(!this.state.data || this.state.data.length <= 1) return alert('Debes colocar algo valido antes de buscar');
    this.props.onFetch(this.state.data);
  }

  handleOnKeyUp(event) {
    let value = event.target.value;
    // 1. al escribir this.wharever me estoy refiriendo a el contexto de esta funcion nada mas
    // y necesito el contexto de la clase
    value = value.trim();
    this.setState({ data: value });
  }

  render() {
    return (
      <div className="searcher-container">
        <input
          type="text"
          placeholder={this.state.placeholder}
          className="searcher"
          onKeyUp={this.handleOnKeyUp}
        />
        <i className="fa fa-search search-icon" onClick={this.onSearchClick}></i>
      </div>
    );
  }
}

export default Searcher;
