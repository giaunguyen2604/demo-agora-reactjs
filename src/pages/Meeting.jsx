import React from 'react'
import PropTypes from 'prop-types'
import MeetingView from 'containers/MeetingView'

function Meeting() {
  console.log(process.env.REACT_APP_ID)
  return (
    <div>
      <MeetingView/>
    </div>
  )
}


export default Meeting

