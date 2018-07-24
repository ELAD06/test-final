import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css';

export default class ItemList extends Component {
    render () {
        let { 
            condition,
            picture,
            free_shipping,
            title,
            price,
            id
        } = this.props;

        condition = condition === 'used' ? 'usado' : <b>nuevo</b>;
        free_shipping = free_shipping ? <span>Envio <b>Gratis</b></span> : 'Envio a todo el país';
        condition = condition === 'used' ? 'usado' : 'nuevo';
        const totalPrice = `${price.amount},${price.decimals} $${price.currency}`;
        return (
            <Link to={`/items/${id}`} className='item-container' target="_blank">
                <div className="item-left">
                    <h3 className="item-title"> { title } </h3>
                    <img className="item-picture" src={picture} alt="item-imagen"/>
                </div>
                <div className="item-right">
                    <p className="item-condition">
                        Condición: {condition}
                    </p>
                    <p className="item-shipping"> 
                        { free_shipping }
                    </p>
                    <p className="item-price">
                        Precio: <span> {totalPrice} </span>
                    </p>
                </div>
            </Link>
        );
    }
}