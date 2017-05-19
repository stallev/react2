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
      ]
    }
  }
  render() {
    return (
      <div className="container">
        <div className="goods">
          <GoodsItem kind = {this.state.goods[0].kind} count = {this.state.goods[0].count}/>
          <GoodsItem kind = {this.state.goods[1].kind} count = {this.state.goods[1].count}/>
          <GoodsItem kind = {this.state.goods[2].kind} count = {this.state.goods[2].count}/>
        </div>
        <div>
          <Basket/>
        </div>
      </div>
    );
  }
}

export default App;
