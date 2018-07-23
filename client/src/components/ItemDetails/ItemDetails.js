import React, { Component } from 'react';
import { API_BASE_URL } from '../../utils/constants/api';
import './ItemDetails.css';

export default class ItemDetails extends Component {
  state = {
    isLoading: {},
    data: {}
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const resp = await fetch(`${API_BASE_URL}/items/${this.props.match.params.id}`);
    const data = await resp.json();
    if(resp.status !== 200) return alert('Error con la API de MercadoLibre');
    this.setState({ data });
    this.setState({ isLoading: false });
  }

  render() {
    return(
      <div className="ItemDetails-container">
        { this.state.isLoading
        ? (
          <div>Cargando...</div>
        ): (
          <div>
            {this.state.data.item.title}
          </div>
        )}
      </div>
    );
  }
}