import React, { Component } from 'react'
import "./App.css"
import logo from "./logo.svg"
export default class App extends Component {
  render() {
    return (
      <div className='App'>

        <h1>Hello World</h1>
        <img src={logo} className='App-logo' alt='App lOGO'/>
        <p>I have Created this React JS application.</p>
      </div>
    )
  }
}
