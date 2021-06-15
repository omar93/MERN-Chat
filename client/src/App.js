import './App.css'
import Chat from './chat/chat.js'

function App() {
  fetch('http://localhost:5000')
  return (
    <div className="app">
      <div id="header"></div>
      <div id="sidebar"></div>
      <div id="mainContainer">
        <Chat></Chat>
      </div>
    </div>
  );
}

export default App
