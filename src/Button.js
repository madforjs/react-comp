import React, { Component } from 'react';

class Button extends Component {
  constructor(){
    super();
    this.name = "Click Me";
  }
  render() {
     return <button>{this.name}</button>
  }
}

export default Button; // Don’t forget to use export default!