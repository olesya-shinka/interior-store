import React, { Component } from "react";
import { AiFillDelete } from "react-icons/ai";

export class Orders extends Component {
  render() {
    return (
      <div className="item-cart">
        <img src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.price} руб.</p>
        <AiFillDelete
          className="delete-icon"
          onClick={() => this.props.onDel(this.props.item.id)}
        />
      </div>
    );
  }
}

export default Orders;
