import React, { Component } from 'react';
import './GoodsItem.css';

class GoodsItem extends Component {
  render() {
    return (
      <div className="goods-item">
        <img className="goods-item__image" src="http://lorempixel.com/50/50/business/" alt="image"/>
        <div className="goods-item__name">
          Goods Item
        </div>
        <span className="goods-item__number"></span>
      </div>
    );
  }
}

export default GoodsItem;
