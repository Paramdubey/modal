import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card } from "@material-ui/core";
import SimpleCard from "./SimpleCard";
import "antd/dist/antd.css";
import Data from "./data.json";

function App() {
  return (
    <div className="App">
      <h1>Member Activity</h1>

      {Data.map((data, index) => {
        return <SimpleCard userData={data} />;
      })}
    </div>
  );
}

export default App;
