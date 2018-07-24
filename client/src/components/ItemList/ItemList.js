import React, { Component } from 'react';
import './ItemList.js';
import './ItemList.css';

export default class ItemList extends Component {
    render () {
        return (         
             <li className='item-container'><code className='contenido'> {this.props.title} </code></li>
            );
    }
}   