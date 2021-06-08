import React from 'react'
import PropTypes from 'prop-types'
import {ChatItemContainer, ChatItemContent, ChatItemUsername} from './styled'
const ChatItem = props => {
  const { chat } = props
  const {username, content} = chat
  return (
    <ChatItemContainer>
      <ChatItemUsername>{username}:</ChatItemUsername>
      <ChatItemContent>{content}</ChatItemContent>
    </ChatItemContainer>
  )
}

ChatItem.propTypes = {
  username: PropTypes.string,
  content: PropTypes.string
}

export default ChatItem
