import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ChatBox from 'components/ChatBox'
import { ChatDisplayArea, ChatAreaContainer } from './styled'
import ChatItem from 'components/ChatItem'
import RtmClient from 'services/agora-rtm'
import { v4 as uuidv4 } from 'uuid';

const rtm = new RtmClient()

const ChatArea = props => {

  const uid = localStorage.getItem('uid')
  const token = localStorage.getItem('tokenrtm')

  const [chatList, setChatList] = useState([])

  const submitChat = (content) => {
    setChatList([...chatList, { username: uid, content }])
    rtm.sendChannelMessage(content, "chatmessage").then(() => {
      console.log('account: ' + rtm.accountName + ' send success')
    }).catch((err) => {
      console.log("Send message to channel fail")
      console.log(err)
    })
  }

  useEffect(() => {
    rtm.init(process.env.REACT_APP_ID)

    rtm.login(uid, token).then(() => {
      rtm.joinChannel("chatmessage").then(() => {
        console.log("JOIN SUCCESS")
      }).catch((err) => {
        console.log(err)
        console.log('Join channel failed, please open console see more details.')
      })
    })
    rtm.on('MemberJoined', ({ channelName, args }) => {
      const memberId = args[0]
      console.log('channel ', channelName, ' member: ', memberId, ' joined')
    })

    rtm.on('ChannelMessage', async ({ channelName, args }) => {
      const [message, memberId] = args
      setChatList((prevChat) => {
        return [...prevChat, { username: memberId, content: message.text }]
      })
    })


  }, [rtm])

  return (
    <ChatAreaContainer>
      <ChatDisplayArea>
        {chatList && chatList.map((chat, index) => <ChatItem chat={chat} key={index}/>)}
      </ChatDisplayArea>
      <ChatBox submitChat={submitChat} />
    </ChatAreaContainer>
  )
}

ChatArea.propTypes = {

}

export default ChatArea
