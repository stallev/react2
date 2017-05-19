import React, { Component } from 'react';
import './GoodsItem.css';

class GoodsItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    this.onAddItemToBasket = this.onAddItemToBasket.bind(this);
    let goodsCount;
  }
  onAddItemToBasket(e){
    e.preventDefault();
    //goodsCount= goodsCount++;
    this.setState({count:1});
    console.log(this.state.count);
  }
  render() {
    return (
      <div className="goods-item">
        <img className="goods-item__image" src="http://lorempixel.com/50/50/abstract/" alt="good item"/>
        <div className="goods-item__name">
          {this.props.kind}
        </div>
        <span className="goods-item__number">
        Количество этого в корзине {this.state.count}
        </span>
        <button className="goods-item__submit" onClick={this.onAddItemToBasket}>
          Купить
        </button>
      </div>
    );
  }
}

export default GoodsItem;
