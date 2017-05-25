import React, { Component } from 'react';
import { Link } from 'react-router';
import './css/App.css';
import GoodsItem from "./GoodsItem";
import Basket from "./Basket";
import AddGoodForm from "./AddGoodForm";
import BasketRow from "./BasketRow";
import Goods from "./Goods";

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
    //this.renderGoodsItem = this.renderGoodsItem.bind(this);
    this.renderAddGoodForm = this.renderAddGoodForm.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.renderBasket = this.renderBasket.bind(this);
    this.renderBasketRows = this.renderBasketRows.bind(this);
    this.handleDeleteGoodItem = this.handleDeleteGoodItem.bind(this);
    this.render = this.render.bind(this);
    
    //service functions
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this._updateLocalStorage = this._updateLocalStorage.bind(this);
  }
  componentDidMount = function(){
    let localGoods = JSON.parse(localStorage.getItem('goods'));
    if (localGoods){
      this.setState({
        goods: localGoods
      });
    }
  };
  componentDidUpdate = function () {
    this._updateLocalStorage();
  }
  _updateLocalStorage = function () {
    let localGoods = JSON.stringify(this.state.goods);
    localStorage.setItem('goods', localGoods);
  };
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
  handleDeleteGoodItem (item){
    let itemIndex = item.index;
    let updatedGoods = this.state.goods.filter(function (item) {
      return itemIndex !==item.index;
    });
    this.setState({goods:updatedGoods});
  }
  // renderGoodsItem(){
  //   let goodsArray = [];
  //   let increment = 0;
  //   this.state.goods.map((item) => {
  //     goodsArray.push(<GoodsItem
  //       key = {increment}
  //       index = {item.index}
  //       kind = {item.kind}
  //       count = {item.count}
  //       onAdd = {this.onIncreasingBasketCount}
  //       onDelete = {this.handleDeleteGoodItem.bind(null, item)}
  //     />);
  //     increment++;
  //   });
  //   return goodsArray;
  // }
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
        <div className="menu">
          <ul>
            <li className="menu__item">
              <Link to='/basket'>Basket</Link>
            </li>
            <li className="menu__item">
              <Link to='/adding-form'>Form</Link>
            </li>
          </ul>
        </div>
        <div>{this.props.children}</div>
        <div>
          <Goods
            goods = {this.state.goods}
            onAdd = {this.onIncreasingBasketCount}
            onDelete = {this.handleDeleteGoodItem}
          />
        </div>
        {/*<div className="goods">*/}
          {/*{this.renderGoodsItem()}*/}
        {/*</div>*/}
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
