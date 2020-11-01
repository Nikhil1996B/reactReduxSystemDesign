import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTableComponent from "./components/DataTable";
import "./App.css";

class App extends Component {
 
  render() {
    return <div className="App">{<DataTableComponent />}</div>;
  }
}

export default App;
