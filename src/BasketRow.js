import React, { Component } from 'react';
import './css/BasketRow.css';

class BasketRow extends Component {
  constructor(props){
    super(props);
    this.state = {
    
    }
  }
  render() {
    return (
      <div className="basket__row">
        <div className="basket-item__name">
          {this.props.goodsTitle}
        </div>
        <div className="basket-item__count">
          {this.props.goodsCount}
        </div>
      </div>
    );
  }
}

export default BasketRow;
