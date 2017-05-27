import React, { Component } from 'react';
import './css/Basket.css';
import BasketRow from "./BasketRow";

class Basket extends Component {
  constructor(props){
    super(props);
    this.state = {
    
    };
    this.renderBasketRows = this.renderBasketRows.bind(this);
  }
  renderBasketRows(){
    let basketRows = [];
    let increment = 0;
    let localGoods = JSON.parse(localStorage.getItem('goods'));
    localGoods.map((i) => {
      if(i.count > 0){
        basketRows.push(
          <BasketRow
            key = {increment}
            goodsTitle = {i.kind}
            goodsCount = {i.count}
          />
        );
      }
      increment++;
    });
    return basketRows;
  }
  render() {
    return (
      <div className="basket">
        <div className="basket__title">
          Корзина
        </div>
        <div className="basket__row-list">
          {this.renderBasketRows()}
        </div>
      </div>
    );
  }
}
export default Basket;
