import AttendeeArea from 'containers/AttendeeArea'
import ChatArea from 'containers/ChatArea'
import ContentArea from 'containers/ContentArea'
import PropTypes from 'prop-types'

const MeetingView = props => {
  return (
    <div style={{ display: 'flex', padding: '10px 10px', justifyContent: 'space-between' }}>
      <div style={{ width: '78%', display: 'flex', flexDirection:'column' }}>
        <ContentArea />
        <AttendeeArea />
      </div>
      <div style={{border: '1px solid black', width: '18%'}}>
        <ChatArea />
      </div>
    </div>
  )
}

MeetingView.propTypes = {

}

export default MeetingView
