import React, { Component } from "react";

// Code EyesOnMe Component Here
export default class EyesOnMe extends Component {
  render() {
    return (
      <button onFocus={()=> console.log('Good!')} onBlur={()=> console.log('Hey! Eyes on me!')}></button>
    )
  }
}