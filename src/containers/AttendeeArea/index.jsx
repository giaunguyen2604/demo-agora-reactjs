import React from 'react'
import PropTypes from 'prop-types'
import SingleAttendee from 'components/SingleAttendee'
import { AttendeeContainer } from './styled'

const AttendeeArea = props => {
  const { attendees, tracks, leaveChannel } = props

  return (
    <AttendeeContainer>
      { tracks && <SingleAttendee videoTrack={tracks[1]} audioTrack={tracks[0]} leaveChannel={leaveChannel}/>}

      { attendees && attendees.length > 0 && attendees.map(attendee => {
        return (<SingleAttendee videoTrack={attendee.videoTrack || null} key={attendee.uid}/>)
      })}
    </AttendeeContainer>
  )
}

AttendeeArea.propTypes = {
  attendees: PropTypes.array, 
  tracks:PropTypes.any, 
  leaveChannel: PropTypes.func
}

export default AttendeeArea
