import React, { Component } from 'react';
import ItemList from '../ItemList';
import './List.css';

export default class List extends  Component {
  render() {
    return (
      <ul className="list-container">
        
        { this.props.isLoading ? 
          (
            <div className="loading-wrapper">
            {/* TODO: // CREAR COMPONENTE DE CARGANDO... {SNIPPER} */}
              Cargando ...
            </div>
          ) :
          (
            this.props.results.map (
              (item, index) => 
                <ItemList key={index} title={item.title} />
            )
          )
        }
      </ul>
    );
  }
}
