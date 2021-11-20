import React, { Component } from "react";

class SideCard extends Component {
  render() {
    var data = this.props.data;
    if (data !== undefined) {
      var name = data.name;
      var rating = data.rating;
      var address = data.formatted_address;
    }
    // console.log(this.props.database);
    return (
      <div className="SideCard">
        <div className="card border-info mb-3 d-flex col-md-9 mt-3">
          <div className="card-header">Stars: {rating}/5</div>
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{address}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SideCard;
