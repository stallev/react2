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
          kind: "firstKind",
          price: 0,
          count: 0
        },
        {
          kind: "secondKind",
          price: 0,
          count: 0
        },
        {
          kind: "thirdKind",
          price: 0,
          count: 0
        }
      ],
      onIncreasingBasketCount(i){
        let goodsCount = this.state.goods[i].count++;
        console.log(goodsCount);
        //this.setState({goods[i].count});
      }
    }
    this.onIncreasingBasketCount = this.onIncreasingBasketCount.bind(this);
  }
  onIncreasingBasketCount(i){
    // let goodsCount = this.state.goods[i].count++;
    // console.log(goodsCount);
    //this.setState({goods[i].count});
  }
  renderGoodsItem(i){
    return <GoodsItem
      kind = {this.state.goods[i].kind}
      count = {this.state.goods[i].count}
      onAdd = {this.onIncreasingBasketCount(i)}
    />
  }
  render() {
    return (
      <div className="container">
        <div className="goods">
          {this.renderGoodsItem(0)}
          {this.renderGoodsItem(1)}
          {this.renderGoodsItem(2)}
        </div>
        <div>
          <Basket/>
        </div>
      </div>
    );
  }
}

export default App;
