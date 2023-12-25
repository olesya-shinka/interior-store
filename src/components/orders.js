import React, { Component } from "react";

export class Orders extends Component {
  render() {
    return (
      <div className="item-cart">
        <img src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.price} руб.</p>
      </div>
    );
  }
}
 
export default Orders;
