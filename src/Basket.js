import React, { Component } from 'react';
import './Basket.css';

class Basket extends Component {
  constructor(props){
    super(props);
    this.state ={
    
    }
  }
  render() {
    return (
      <div className="basket">
        <div className="basket__title">
          Корзина
        </div>
        <div className="basket__row">
          <div className="basket__item-name"></div>
          <div className="basket__count"></div>
        </div>
      </div>
    );
  }
}

export default Basket;
