import React, { Component } from 'react';
import ItemList from '../ItemList';
import './List.css';

export default class List extends  Component {
  render() {
    const { isLoading } = this.props;
    const classes = isLoading ? 'list-container loading' : 'list-container';
    return (
      <ul className={classes}>
        
        { isLoading ? 
          (
            <div className="loading-wrapper">
            {/* TODO: // CREAR COMPONENTE DE CARGANDO... {SNIPPER} */}
              Cargando ...
            </div>
          ) :
          (
            this.props.results.map (
              (item) => 
                <ItemList key={item.id} {...item}/>
            )
          )
        }
      </ul>
    );
  }
}
