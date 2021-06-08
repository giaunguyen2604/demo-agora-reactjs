import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ChatBox from 'components/ChatBox'
import { ChatDisplayArea, ChatAreaContainer } from './styled'
import ChatItem from 'components/ChatItem'

const ChatArea = props => {
  const [chatList, setChatList] = useState([{username: 'giau.nguyen', content: 'hello'}])

  const submitChat = (content) => {
    setChatList([...chatList, {username: 'giau.nguyen', content}])
  }

  return (
    <ChatAreaContainer>
      <ChatDisplayArea>
        {chatList && chatList.map(chat => <ChatItem chat={chat}/>)}
      </ChatDisplayArea>
      <ChatBox  submitChat={submitChat}/>
    </ChatAreaContainer>
  )
}

ChatArea.propTypes = {

}

export default ChatArea
