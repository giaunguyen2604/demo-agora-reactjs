import AttendeeArea from 'containers/AttendeeArea'
import ChatArea from 'containers/ChatArea'
import ContentArea from 'containers/ContentArea'
import PropTypes from 'prop-types'
import { MeetingContainer, ContentAttendeeContainer, ChatContainer } from './styled'

const MeetingView = props => {
  return (
    <MeetingContainer>
      <ContentAttendeeContainer>
        <ContentArea />
        <AttendeeArea />
      </ContentAttendeeContainer>
      <ChatContainer>
        <ChatArea />
      </ChatContainer>
    </MeetingContainer>
  )
}

MeetingView.propTypes = {

}

export default MeetingView
