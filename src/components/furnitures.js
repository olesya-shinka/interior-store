import React, { Component } from "react";
import ItemFurnitures from "./itemFurnitures";

export class Furnitures extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
          <ItemFurnitures key={el.id} item={el} onOrder={this.props.onOrder} showDescriptionItem={this.props.showDescriptionItem} />
        ))}
      </main>
    );
  }
}

export default Furnitures;
