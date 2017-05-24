import React, { Component } from 'react';
import './css/AddGoodForm.css';

class AddGoodForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      name: "",
      index: "",
      price: ""
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
    this.handleChangePrice= this.handleChangePrice.bind(this);
    this.handleSubmitForm= this.handleSubmitForm.bind(this);
  }
  handleChangeName(e){
    this.setState({name:e.target.value});
  }
  handleChangeIndex(e){
    this.setState({index:e.target.value});
  }
  handleChangePrice(e){
    this.setState({price:e.target.value});
  }
  handleSubmitForm(){
  
  }
  render() {
    return (
      <form className="add-good-form">
        <legend className="add-good-form__title">
          Форма добавления товара
        </legend>
        <div className="add-good-form__item">
          <label htmlFor="#goods-name">
            Название товара
          </label>
          <input type="text" id="#goods-name" value={this.state.name} onChange={this.handleChangeName}/>
        </div>
        <div className="add-good-form__item">
          <label htmlFor="#goods-index">
            Index
          </label>
          <input type="number" id="#goods-index" value={this.state.index} onChange={this.handleChangeIndex}/>
        </div>
        <div className="add-good-form__item">
          <label htmlFor="#goods-price">
            Цена товара
          </label>
          <input type="number" id="#goods-price" value={this.state.price} onChange={this.handleChangePrice}/>
        </div>
        <div className="add-good-form__item">
          <input type="submit" value="Добавить товар" onClick={this.props.onSubmitForm}/>
        </div>
      </form>
    );
  }
}

export default AddGoodForm;
