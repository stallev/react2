import React, { Component } from 'react';
import './App.css';
import GoodsItem from "./GoodsItem";
import Basket from "./Basket";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="goods">
        <GoodsItem/> <GoodsItem/> <GoodsItem/>
        </div>
        <div>
          <Basket/>
        </div>
      </div>
    );
  }
}

export default App;
