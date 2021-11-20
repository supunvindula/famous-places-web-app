import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  getKey(e) {
    e.preventDefault();
    const keyTyped = this.inputword.current.value;
    const update = this.props;

    axios
      .post("http://172.17.0.4:3001/getLocations", {
        city: keyTyped,
      })
      .then(function (response) {
        update.callUpdate(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  constructor(props) {
    super(props);
    this.inputword = React.createRef();
  }
  render() {
    return (
      <div className="Search">
        {/* Search Bar */}
        <form className="d-flex mx-auto">
          <div className="col-md-9">
            <input
              className="form-control  "
              type="text"
              placeholder="Search Nearby Places"
              ref={this.inputword}
            ></input>
          </div>
          <button
            className="btn btn-secondary my-2 my-sm-0"
            type="submit"
            onClick={this.getKey.bind(this)}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}
export default Search;
