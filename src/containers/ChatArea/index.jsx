import React, { useState, useEffect } from 'react'
import ChatBox from 'components/ChatBox'
import { ChatDisplayArea, ChatAreaContainer } from './styled'
import ChatItem from 'components/ChatItem'
import RtmClient from 'services/agora-rtm'

const rtm = new RtmClient()

const ChatArea = () => {

  const uid = localStorage.getItem('uid')
  const token = localStorage.getItem('tokenrtm')

  const [chatList, setChatList] = useState([])

  const channelName = 'chatmessage'

  const submitChat = (content) => {
    setChatList([...chatList, { username: uid, content }])
    rtm.sendChannelMessage(content, channelName).then(() => {
      console.log('account: ' + rtm.accountName + ' send success')
    }).catch((err) => {
      console.log("Send message to channel fail")
    })
  }

  useEffect(() => {
    rtm.init(process.env.REACT_APP_ID)

    rtm.login(uid, token).then(() => {
      rtm.joinChannel(channelName).then(() => {
        console.log("JOIN SUCCESS")
      }).catch((err) => {
        alert(err)
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
    // eslint-disable-next-line
  }, [rtm])

  return (
    <ChatAreaContainer>
      <ChatDisplayArea>
        {chatList && chatList.map((chat, index) => <ChatItem chat={chat} key={index} />)}
      </ChatDisplayArea>
      <ChatBox submitChat={submitChat} />
    </ChatAreaContainer>
  )
}

ChatArea.propTypes = {

}

export default ChatArea
