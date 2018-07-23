import React, { Component } from 'react';
import { API_BASE_URL } from '../../utils/constants/api';
import './ItemDetails.css';

export default class ItemDetails extends Component {
  state = {
    isLoading: {},
    data: {},
    hasError: false,
    error: {}
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const resp = await fetch(`${API_BASE_URL}/items/${this.props.match.params.id}`);
    if(resp.status !== 200) return this.props.history.push('/404');
    const data = await resp.json();
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