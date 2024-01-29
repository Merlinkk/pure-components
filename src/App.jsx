import React, { Component } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PureCounterComponent from './components/PureCounterComponent'
import SimpleCounterComponent from './components/SimpleCounterComponent'

class App extends Component {
  render() {
    return (
      <div>
        <SimpleCounterComponent />
        <br />
        <br />
        <PureCounterComponent />
      </div>
    )
  }
}


export default App
