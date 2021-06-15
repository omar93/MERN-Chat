import React, { Component } from 'react'
import './formStyle.css'

export default class form extends Component {
  render() {
    return (
      <form id="form">
        <input type="text"></input>
        <input type="submit" value="Send"></input>
      </form>
    )
  }
}
