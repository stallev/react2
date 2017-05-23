import React, { Component } from 'react';
import './App.css';
import GoodsItem from "./GoodsItem";
import Basket from "./Basket";
import AddGoodForm from "./AddGoodForm";

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
    this.renderAddGoodForm = this.renderAddGoodForm.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }
  onIncreasingBasketCount(e){
    let cardIndex = +(e.target.parentNode.dataset.index);
    let updatedGoods = this.state.goods.map((item) => {
      if(item.index === cardIndex){
        item.count = item.count+1;
        return item;
      }
      return item;
    });
    this.setState({goods:updatedGoods});
  }
  handleSubmitForm(){
    let updatedGoods = this.state.goods;
    updatedGoods.push({
      key: document.getElementById('#goods-index').innerHTML,
      index: document.getElementById('#goods-index').innerHTML,
      kind: document.getElementById('#goods-name').innerHTML,
      count: 0,
      price: document.getElementById('#goods-price').innerHTML
    });
    this.setState({goods:updatedGoods});
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
  renderAddGoodForm(){
    return(
      <AddGoodForm
      onSubmitForm = {this.handleSubmitForm}
      />
    )
  }
  render() {
    return (
      <div className="container">
        <div className="goods">
          {this.renderGoodsItem()}
        </div>
        <div>
        
        </div>
        <div>
          {this.renderAddGoodForm()}
        </div>
        <div>
          <Basket/>
        </div>
      </div>
    );
  }
}

export default App;
