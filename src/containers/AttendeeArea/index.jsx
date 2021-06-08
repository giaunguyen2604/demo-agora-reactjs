import React from 'react'
import PropTypes from 'prop-types'
import SingleAttendee from 'components/SingleAttendee'

const AttendeeArea = props => {
  return (
    <div style={{display: 'flex', marginTop: '15px', overflowY:'scroll'}}>
      <SingleAttendee/>
      <SingleAttendee/>
      <SingleAttendee/>
    </div>
  )
}

AttendeeArea.propTypes = {

}

export default AttendeeArea
