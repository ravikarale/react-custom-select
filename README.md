# React Custom Select with icon

A simple, configurable and reusable Select component for React.

<!-- ![](https://cloud.githubusercontent.com/assets/1412392/5339491/c40de124-7ee1-11e4-9f07-9276e2545f27.png) -->

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install react-select-with-icon --save
```

## Configuration

The most basic use of the select can be described with:

```js
  let colors = [
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

  You can use `onChange` event handler which fires each time when option has been selected or removed.

  <CustomSelect
    options={this.colors}
    labelIcon={false}
    placeholder="select"
    inputPlaceholder="search here"
    onChange={() => this.handleOnChange}
    style={{}}
  />

  <CustomSelect
    options={this.colors}
    labelIcon={true}
    defaultIcon="block"
    placeholder="select"
    inputPlaceholder="search here"
    onChange={() => this.handleOnChange}
    style={{}}
  />

  <CustomSelect
    options={this.colors}
    labelIcon={true}
    defaultIcon="dot"
    placeholder="select"
    inputPlaceholder="search here"
    onChange={() => this.handleOnChange}
    style={{}}
  />
```

```js
  let categories = [
    {
      name: "programming",
      value: "programming",
      icon: "fas fa-file-code"      
    },
    {
      name: "call",
      value: "call",
      icon: "fas fa-phone-volume"
    },
    {
      name: "video call",
      value: "video call",
      icon: "fas fa-video"
    },
    {
      name: "metting",
      value: "metting",
      icon: "fa fa-users"
    },
    {
      name: "database design",
      value: "database design",
      icon: "fa fa-database"
    },
    {
      name: "testing",
      value: "testing",
      icon: "fa fa-bug"
    }
  ]

  <CustomSelect
    options={this.categories}
    labelIcon={true}
    defaultIcon="icon"
    placeholder="select"
    default={defaultValue} // you can pass default object as selected.
    label="name" // default label is name, TODO: you can change as per your object fields.
    inputPlaceholder="search here"
    onChange={() => this.handleOnChange} // handleOnChange get object.
    style={{}} // you can apply custom style
  />
```