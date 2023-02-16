import React,{useState} from 'react'
import "./contact.scss"
export default function Contacts() {

  const [displayMessage, setDisplayMessage] = useState(false)

  function handleSubmit(e){
    e.preventDefault();
    setDisplayMessage(true)

  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"/>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {displayMessage && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
    </div>
  )
}
