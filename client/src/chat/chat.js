import './style.css'
import React, { Component } from 'react'
import Message from '../message/message'

export default class chat extends Component {
  state = {
    loading: true,
    person: null
  }

  async componentDidMount() {
    const url = 'http://localhost:5000/api'
    const resp = await fetch(url)
    let data = await resp.json()
    this.setState({ person: data.name, loading: false })
  }

  render() {
    return (
      <div id="chatContainer">
        <Message></Message>
        <Message></Message>
      </div>
    )
  }
}
