import React, { Component } from 'react';
import './css/Basket.css';

class Basket extends Component {
  constructor(props){
    super(props);
    this.state = {
    
    }
  }
  render() {
    return (
      <div className="basket">
        <div className="basket__title">
          Корзина
        </div>
        <div className="basket__row-list">
          {this.props.basketContent()}
        </div>
      </div>
    );
  }
}

export default Basket;
