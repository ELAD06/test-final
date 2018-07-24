import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';
export default class NoMatch extends Component {
  render() {
    return(
      <div className="no-match-container">
        <p> <b>404</b> Pagina no encontrada.</p>
        <p> Lo siento, capaz solo querias ir a el <Link to="/">inicio</Link></p>
      </div>
    )
  }
}