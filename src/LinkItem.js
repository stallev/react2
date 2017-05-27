import React, { Component } from 'react';
import './css/Link.css';
import { Link } from 'react-router';

class LinkItem extends Component {
  constructor(props){
    super(props);
    
    this.render = this.render.bind(this);
  }
  render() {
    return (
      <li className="menu__item">
        <Link to={this.props.path}>{this.props.name}</Link>
      </li>
    );
  }
}

export default LinkItem;