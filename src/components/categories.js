import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          type: "all",
          name: "All",
        },
        {
          type: "beds",
          name: "Beds",
        },
        {
          type: "chairs",
          name: "Chairs",
        },
        {
          type: "tables",
          name: "Tables",
        },
        {
          type: "sofa",
          name: "Sofa",
        },
        {
          type: "closets",
          name: "Closets",
        },
      ],
    };
  }
  render() {
    return <div className="categories">
        {this.state.categories.map((category) => (
            <div key={category.type} onClick={() => this.props.selectCategory(category.type)}>{category.name}</div>
        ))}
    </div>;
  }
}

export default Categories;
