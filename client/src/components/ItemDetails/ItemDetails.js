import React, { Component } from 'react';
import SpinnerWrapper from '../SpinnerWrapper'
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
    let {
      author,
      item,
      condition,
      description,
      free_shipping,
      picture,
      sold_quantity,
      permalink
    } = this.state.data;

    condition = condition === 'used' ? 'usado' : <b>nuevo</b>;
    free_shipping = free_shipping ? <span>Envio <b>Gratis</b></span> : 'Envio a todo el país';
    condition = condition === 'used' ? 'usado' : 'nuevo';

    const totalPrice = item && `${item.price.amount},${item.price.decimals} $${item.price.currency}`;
    const classes = this.state.isLoading ? 'item-details-container loading' : 'item-details-container';

    return(
      <div className={`${classes}`}>
        { this.state.isLoading
        ? (
          <SpinnerWrapper color="purple"/>
        ): (
          <div className="item-details-package">
            <div className="item-details-header">
              <div className="item-details-title">
                { item.title }
              </div>
            </div>

            <div className="item-details-body">
              <div className="item-details-left-container">
                <img src={picture} alt={`${item.title}-imagen`} className="item-details-picture"/>
                <div className="item-details-condition">
                  Condición: {condition}
                </div>
              </div>

              <div className="item-details-right-container">
                <div className="item-details-free-shipping">
                  <p>{free_shipping}</p>
                </div>
                <div className="item-details-price">
                  { totalPrice }
                </div>
                
                <div className="item-details-sold-quantity">
                  <p>Cantidad de ventas: {sold_quantity}</p>
                </div>
                <a className="item-details-buy" href={permalink} target="_blank">Comprar</a>
                <div className="item-details-author">
                  Autor:
                  <p className="author-name">
                    <span>{author.name} {author.lastname}</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="item-details-description">
              Descripción:
              <p>{description}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}