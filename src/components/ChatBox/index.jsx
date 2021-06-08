import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ChatBoxContainer } from './styled'

const ChatBox = props => {
  const [message, setMessage] = useState('')
  const { submitChat } = props

  const changeMessage = (e) => {
    setMessage(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    submitChat(message)
    setMessage('')
  }
  return (
    <ChatBoxContainer>
    <form onSubmit={onSubmit}>
      <input type="text" className="form-control" onChange={changeMessage} value={message}/>
      <button type="submit" className="btn btn-primary ml-1">
        <i className="fas fa-paper-plane"/>
      </button>
    </form>
    </ChatBoxContainer>
  )
}

ChatBox.propTypes = {
  submitChat: PropTypes.func
}

export default ChatBox
