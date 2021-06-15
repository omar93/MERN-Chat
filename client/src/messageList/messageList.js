import { useState } from 'react'
import Message from '../message/message'

const MessageList = () => {
  const [messages] = useState([
    {
      name: 'omar',
      message: 'tja',
      id: 1
    },
    {
      name: 'ali',
      msg: 'yo',
      id: 2
    }
  ])
  return (
    <div className="messageList">
      {messages.map((msg) => (
        <div className="messageContainer">
          <Message name={msg.name} message={msg.message} key={msg.id}></Message>
        </div>
      ))}
    </div>

  )
}

export default MessageList