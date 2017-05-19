import React, { Component } from 'react';
import './App.css';
import GoodsItem from "./GoodsItem";
import Basket from "./Basket";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      kind1: "firstKind",
      kind2: "secondKind",
      kind3: "thirdKind"
    }
  }
  render() {
    return (
      <div className="container">
        <div className="goods">
          <GoodsItem kind = {this.state.kind1}/>
          <GoodsItem kind = {this.state.kind2}/>
          <GoodsItem kind = {this.state.kind3}/>
        </div>
        <div>
          <Basket/>
        </div>
      </div>
    );
  }
}

export default App;
