import React, { Component } from 'react';
import './css/Goods.css';
import GoodsItem from "./GoodsItem";

class Goods extends Component {
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
    this.handleDeleteGoodItem = this.handleDeleteGoodItem.bind(this);
    
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
    // this.setState({
    //   goods: JSON.parse(localStorage.getItem('goods'))
    // });
  };
  _updateLocalStorage = function () {
    let localGoods = JSON.stringify(this.state.goods);
    localStorage.setItem('goods', localGoods);
  };
  
  onIncreasingBasketCount(item){
    let cardIndex = item.index;
    let localGoods = JSON.parse(localStorage.getItem('goods'));
    console.log(this.state.goods);
    let updatedGoods = this.state.goods.map((item) => {
      if(item.index === cardIndex){
        item.count = item.count+1;
        return item;
      }
      return item;
    });
    this.setState({goods:updatedGoods});
  }
  handleDeleteGoodItem (item){
    let itemIndex = item.index;
    let updatedGoods = this.state.goods.filter(function (item) {
      return itemIndex !==item.index;
    });
    this.setState({goods:updatedGoods});
  }
  render() {
    let goodsArray = [];
    // let goods1 = JSON.parse(localStorage.getItem('goods'));
    let goods1 = this.state.goods;
    let increment = 0;
    goods1.map((item) => {
      goodsArray.push(<GoodsItem
        key = {increment}
        index = {item.index}
        kind = {item.kind}
        count = {item.count}
        onAdd = {this.onIncreasingBasketCount.bind(null, item)}
        onDelete = {this.handleDeleteGoodItem.bind(null, item)}
      />);
      increment++;
    });
    return <div className="goods">{goodsArray}</div>;
  }
}

export default Goods;