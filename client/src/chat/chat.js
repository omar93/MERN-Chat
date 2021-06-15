import './chatStyle.css'
import React, { Component } from 'react'
import MessageList from '../messageList/messageList'
import Form from '../input/form'

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

        <div id="messageListContainer"><MessageList></MessageList></div>

        <div id="formContainer"><Form></Form></div>

      </div>
    )
  }
}
