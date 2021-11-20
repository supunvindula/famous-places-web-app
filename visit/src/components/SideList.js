import React, { Component } from "react";
import SideCard from "./SideCard";

class SideList extends Component {
  render() {
    if (this.props.savedPlaces !== undefined) {
      const saves = Array.from(new Set(this.props.savedPlaces));
      var savedList = saves.map((obj) => {
        return <SideCard key={obj.name} data={obj} />;
      });
    }
    return (
      <div className="SideList">
        <h2>Saved Places</h2>
        {savedList}
      </div>
    );
  }
}

export default SideList;
