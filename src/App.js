import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTableComponent from "./components/DataTable";
import { fetchData } from "./HTTP/http";
import "./App.css";

function App() {
  // const profiles = useSelector((state) => state.records);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <DataTableComponent />
    </div>
  );
}

export default App;
