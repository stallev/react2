import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GoodsItem.css';

class GoodsItem extends Component {
  static propTypes = {
    kind: PropTypes.string.isRequired
  };
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="goods-item" data-index={this.props.index}>
        <img className="goods-item__image" src="http://lorempixel.com/50/50/abstract/" alt="good item"/>
        <div className="goods-item__name">
          {this.props.kind}
        </div>
        <span className="goods-item__number">
        Количество этого в корзине {this.props.count}
        </span>
        <button className="goods-item__submit" onClick = {this.props.onAdd}>
          Купить
        </button>
      </div>
    );
  }
}

export default GoodsItem;
