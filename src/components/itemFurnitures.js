import React, { Component } from "react";

export class ItemFurnitures extends Component {
  render() {
    return (
      <div className="item">
        <img
          src={"./img/" + this.props.item.img}
          onClick={() => this.props.showDescriptionItem(this.props.item)}
        />
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.description}</p>
        <p>{this.props.item.price} руб.</p>
        <div>
          <button onClick={() => this.props.onOrder(this.props.item)}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default ItemFurnitures;
