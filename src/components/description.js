import React, { Component } from "react";
import { IoIosClose } from "react-icons/io";

export class Description extends Component {
  render() {
    return (
      <div className="description">
        <div>
          <IoIosClose
            className="close-icon"
            onClick={() => this.props.showDescriptionItem(this.props.item)}
          />
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
      </div>
    );
  }
}

export default Description;
