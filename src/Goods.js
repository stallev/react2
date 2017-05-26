import React, { Component } from 'react';
import './css/Goods.css';
import GoodsItem from "./GoodsItem";

class Goods extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let goodsArray = [];
    let increment = 0;
    this.props.goods.map((item) => {
      goodsArray.push(<GoodsItem
        key = {increment}
        index = {item.index}
        kind = {item.kind}
        count = {item.count}
        onAddItem = {this.props.onAdd}
        onDeleteItem = {this.props.onDelete.bind(null, item)}
      />);
      increment++;
    });
    return goodsArray;
  }
}

export default Goods;