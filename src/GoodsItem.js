import React, { Component } from 'react';
import './GoodsItem.css';

class GoodsItem extends Component {
  render() {
    return (
      <div className="goods-item">
        <img className="goods-item__image" src="http://lorempixel.com/50/50/abstract/" alt="good item"/>
        <div className="goods-item__name">
          Goods Item
        </div>
        <span className="goods-item__number"></span>
        <button className="goods-item__submit">
          Купить
        </button>
      </div>
    );
  }
}

export default GoodsItem;
