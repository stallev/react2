import React, { Component } from 'react';
import './App.css';
import GoodsItem from "./GoodsItem";
import Basket from "./Basket";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      goods: [
        {
          index: 0,
          kind: "firstKind",
          price: 0,
          count: 0
        },
        {
          index: 1,
          kind: "secondKind",
          price: 0,
          count: 0
        },
        {
          index: 2,
          kind: "thirdKind",
          price: 0,
          count: 0
        }
      ]
    };
    this.onIncreasingBasketCount = this.onIncreasingBasketCount.bind(this);
    this.renderGoodsItem = this.renderGoodsItem.bind(this);
  }
  onIncreasingBasketCount(e){
    console.log(e);
    //console.log(1);
    let cardIndex = e.target.parentNode.dataset.index;
    console.log(cardIndex);
    let updatedGoods = this.state.goods.map(function (item) {
      if(item === cardIndex){
        item.count++;
        return item;
      }
      return item;
    });
    this.setState({goods:updatedGoods});
    // let goodsCount = this.state.goods[i].count++;
    // console.log(goodsCount);
    //this.setState({goods[i].count});
  }
  renderGoodsItem(){
    let goodsArray = [];
    this.state.goods.map((i) => {
      goodsArray.push(<GoodsItem
        key = {i.index}
        index = {i.index}
        kind = {i.kind}
        count = {i.count}
        onAdd = {this.onIncreasingBasketCount}
      />);
    });
   
    return goodsArray;
  }
  render() {
    return (
      <div className="container">
        <div className="goods">
          {this.renderGoodsItem()}
        </div>
        <div>
          <Basket/>
        </div>
      </div>
    );
  }
}

export default App;
