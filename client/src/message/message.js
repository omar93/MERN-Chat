import './messageStyle.css'

const message = props => {
  return (
    <div id="messageContainer">
      <p id="message">Sender: {props.name}</p>
      <p id="message">Message: {props.message}</p>
    </div>
  )
}

export default message;