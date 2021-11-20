import React, { Component } from "react";

class Card extends Component {
  render() {
    var data = this.props.data;
    if (data !== undefined) {
      var name = data.name;
      var rating = data.rating;
      var address = data.formatted_address;
    }
    // console.log(this.props.database);
    return (
      <div className="Card">
        <div className="card border-success mb-3 d-flex col-md-9 mt-3">
          <div className="card-header">Stars: {rating}/5</div>
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{address}</p>
          </div>
          <div>
            <button
              type="button"
              onClick={() => this.props.saveList(data)}
              className="btn btn-success mb-2 ms-2"
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
