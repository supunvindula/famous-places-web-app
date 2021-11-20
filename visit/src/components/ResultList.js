import React, { Component } from "react";
import Card from "./Card";

class ResultList extends Component {
  render() {
    if (this.props.resultPlaces.results !== undefined) {
      var placeList = this.props.resultPlaces.results.map((obj) => {
        return (
          <Card
            key={obj.name}
            data={obj}
            saveList={this.props.saveList.bind(this)}
          />
        );
      });
    }
    return <div className="ResultList">{placeList}</div>;
  }
}

export default ResultList;
