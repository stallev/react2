import React, { Component } from 'react';
import './css/App.css';
import GoodsItem from "./GoodsItem";
import Basket from "./Basket";
import AddGoodForm from "./AddGoodForm";
import BasketRow from "./BasketRow";

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
    this.renderBasket = this.renderBasket.bind(this);
    this.renderBasketRows = this.renderBasketRows.bind(this);
    
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
  handleSubmitForm(e){
    let updatedGoods = this.state.goods;
    updatedGoods.push({
      index: updatedGoods.length,
      kind: document.getElementById('#goods-name').value,
      count: 0,
      price: Number(document.getElementById('#goods-price').value)
    });
    this.setState({goods:updatedGoods});
    e.preventDefault();
  }
  renderGoodsItem(){
    let goodsArray = [];
    let increment = 0;
    this.state.goods.map((i) => {
      goodsArray.push(<GoodsItem
        key = {increment}
        index = {i.index}
        kind = {i.kind}
        count = {i.count}
        onAdd = {this.onIncreasingBasketCount}
      />);
      increment++;
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
  renderBasket(){
    return(
      <Basket
      basketContent = {this.renderBasketRows}
      />
    )
  }
  renderBasketRows(){
    let basketRows = [];
    let increment = 0;
    this.state.goods.map((i) => {
      if(i.count > 0){
        basketRows.push(
          <BasketRow
            key = {increment}
            goodsTitle = {i.kind}
            goodsCount = {i.count}
          />
        );
      }
      increment++;
    });
    return basketRows;
  }
  render() {
    return (
      <div className="container">
        <div className="goods">
          {this.renderGoodsItem()}
        </div>
        <div>
          {this.renderAddGoodForm()}
        </div>
        <div>
          {this.renderBasket()}
        </div>
      </div>
    );
  }
}

export default App;
