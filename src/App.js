import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomSelect from "./CustomSelect";


function App() {
  let data = [
    {
      name: "red",
      value: "#f00",
      color: "red",
    },
    {
      name: "green",
      value: "#0f0",
      color: "green",
    },
    {
      name: "blue",
      value: "#00f",
      color: "blue",
    },
    {
      name: "cyan",
      value: "#0ff",
      color: "cyan",
    },
    {
      name: "magenta",
      value: "#f0f",
      color: "magenta",
    },
    {
      name: "yellow",
      value: "#ff0",
      color: "yellow",
    },
    {
      name: "black",
      value: "#000",
      color: "black",
    }
  ]
  // let data = [
  //   {
  //     name: "programming",
  //     value: "programming",
  //     icon: "fas fa-file-code"      
  //   },
  //   {
  //     name: "call",
  //     value: "call",
  //     icon: "fas fa-phone-volume"
  //   },
  //   {
  //     name: "video call",
  //     value: "video call",
  //     icon: "fas fa-video"
  //   },
  //   {
  //     name: "metting",
  //     value: "metting",
  //     icon: "fa fa-users"
  //   },
  //   {
  //     name: "database design",
  //     value: "database design",
  //     icon: "fa fa-database"
  //   },
  //   {
  //     name: "testing",
  //     value: "testing",
  //     icon: "fa fa-bug"
  //   }
  // ]

  let defaultValue = {
    name: "blue",
    value: "#00f",
    color: "blue",
    // icon: "fa fa-user"
  }
  return (
    <div className="App">
      <CustomSelect
        options={data}
        className=""
        labelIcon={true}
        defaultIcon="icon"
        default={defaultValue}
        label="name"
        placeholder="select"
        inputPlaceholder="search here"
        onChange={() => {}}
        style={{ width: '300px', margin: "auto", paddingTop: "20px" }}
      />
    </div>
  );
}

export default App;
