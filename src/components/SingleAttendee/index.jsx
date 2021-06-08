import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { SingleAttendeeContainer, AttendeeControl } from './styled'
import { AgoraVideoPlayer} from 'services/agora'
import { routes } from 'constants/index'


const SingleAttendee = props => {
  const { audioTrack, videoTrack, leaveChannel } = props
  const [micStatus, setMicStatus] = useState(true)
  const [camStatus, setCamStatus] = useState(true)

  const history = useHistory()

  const toggleMicrophone = async() => {
    await audioTrack.setEnabled(!micStatus);
    setMicStatus(!micStatus)
  }

  const toggleCamera = async() => {
    await videoTrack.setEnabled(!camStatus);
    setCamStatus(!camStatus)
  }

  const outRoom = () => {
    leaveChannel()
    history.push(routes.HOME)
  }
 
  return (
    <SingleAttendeeContainer>
      <AgoraVideoPlayer videoTrack={videoTrack} style={{width: '100%', height: '100%'}}/>
      <AttendeeControl>
        <i className={`fa ${micStatus ? 'fa-microphone' : 'fa-microphone-slash'}`} onClick={toggleMicrophone}></i>
        <div style={{position: 'relative'}}>
          <i className={`fas fa-camera ${!camStatus ? 'camera-off' : ''}`} onClick={toggleCamera}></i>
        </div>
        <i className="fas fa-sign-out-alt" onClick={outRoom}></i>
      </AttendeeControl>
    </SingleAttendeeContainer>
  )
}

SingleAttendee.propTypes = {

}

export default SingleAttendee
