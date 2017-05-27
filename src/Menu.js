import React, { Component } from 'react';
import './css/Menu.css';
import LinkItem from "./LinkItem";

class Menu extends Component {
  static propTypes = {
    //kind: PropTypes.string.isRequired
  };
  constructor(props){
    super(props);
    this.state = {
      menu: [
        {
          name: "Form",
          path: "/adding-form"
        },
        {
          name: "Basket",
          path: "/basket"
        },
        {
          name: "Goods",
          path: "/goods-list"
        }
      ]
    };
    this.render = this.render.bind(this);
  }
  render() {
    let links = [];
    this.state.menu.map((link) => {
      links.push(
        <LinkItem
          path = {link.path}
          name = {link.name}
        />
      )
    });
    return (
      <ul>{links}</ul>
    );
  }
}

export default Menu;