import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import ResultList from "./components/ResultList";
import SideList from "./components/SideList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      saved: [],
    };
  }

  updateState(value) {
    this.setState({
      results: value,
    });
  }

  saveList(data) {
    // console.log(data);
    var places = this.state.saved.concat(data);
    this.setState({
      saved: places,
    });
  }
  render() {
    return (
      <div className="App">
        {/* navbar start */}
        <Navbar />
        {/* navbar end */}
        {/* search row starts */}
        <div className="row container mx-auto mt-3">
          {/* searchbar */}
          <div className="form-group    col-md-8">
            {/* form and button */}
            <Search callUpdate={this.updateState.bind(this)} />
            {/* search result card */}
            <ResultList
              resultPlaces={this.state.results}
              saveList={this.saveList.bind(this)}
            />
          </div>
          {/* saved places */}
          <div className="col-md-4">
            <SideList savedPlaces={this.state.saved} />
          </div>
        </div>
        {/* search row ends */}
      </div>
    );
  }
}

export default App;
