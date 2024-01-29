import React, { Component } from 'react'

export default class SimpleCounterComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      toggle: false
    }
  }

  increment = () => {
    this.state.toggle ? this.setState({
      count: this.state.count + 1
    }) : this.setState({
      count: this.state.count
    })
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
    setTimeout(() => {
      console.log(this.state.toggle)
    }, 50);
  } 
  
  
  render() {
    return (
      <div>
        {console.log("Simple-component")}
        Simple Counter Component
        <br /><br />
        {this.state.count} 
        <br /><br />
        <button style={this.state.toggle ? {background:'green'} : {background:'red'}} onClick={this.toggle}>Toggle</button>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
