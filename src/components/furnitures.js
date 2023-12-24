import React, { Component } from "react";
import ItemFurnitures from "./itemFurnitures";

export class Furnitures extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((item) => (
          <ItemFurnitures key={item.id} item={item}/>
        ))}
      </main>
    );
  }
}

export default Furnitures;