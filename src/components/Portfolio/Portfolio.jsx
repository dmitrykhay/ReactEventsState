import { Component } from "react";
import { ProjectList } from "./ProjectList";
import { Toolbar } from "./Toolbar";

import "./Portfolio.css";

export class Portfolio extends Component {
  state = { selected: "All" };

  arr = (listImages) => {
    return listImages.filter(img => {
      return img.category === this.state.selected || this.state.selected === "All";
    })
  }

  handleSelectFilter = (filter) => {
    this.setState({ selected: filter });
  };

  render() {
    const listFilters = ["All", "Websites", "Flayers", "Business Cards"];
    const listImages = this.props.data
    return (
      <>
        <Toolbar
          filters={listFilters}
          selected={this.state.selected}
          onSelectFilter={this.handleSelectFilter} />
        <ProjectList arr={this.arr(listImages)} />
      </>
    )
  }  
}
