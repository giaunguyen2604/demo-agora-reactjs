import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { SingleAttendeeContainer, AttendeeControl } from './styled'
import { routes } from 'constants/index'

const SingleAttendee = props => {

  const [micStatus, setMicStatus] = useState(true)
  const [camStatus, setCamStatus] = useState(true)

  const history = useHistory()

  const toggleMicrophone = () => {
    setMicStatus(!micStatus)
  }

  const toggleCamera = () => {
    setCamStatus(!camStatus)
  }

  const outRoom = () => {
    history.push(routes.HOME)
  }
 
  return (
    <SingleAttendeeContainer>
      <AttendeeControl>
        <i class={`fa ${micStatus ? 'fa-microphone' : 'fa-microphone-slash'}`} onClick={toggleMicrophone}></i>
        <div style={{position: 'relative'}}>
          <i class={`fas fa-camera ${!camStatus ? 'camera-off' : ''}`} onClick={toggleCamera}></i>
        </div>
        <i class="fas fa-sign-out-alt" onClick={outRoom}></i>
      </AttendeeControl>
    </SingleAttendeeContainer>
  )
}

SingleAttendee.propTypes = {

}

export default SingleAttendee
