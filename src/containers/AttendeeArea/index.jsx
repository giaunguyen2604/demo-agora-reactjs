import React from 'react'
import PropTypes from 'prop-types'
import SingleAttendee from 'components/SingleAttendee'
import { AttendeeContainer } from './styled'

const AttendeeArea = props => {
  
  return (
    <AttendeeContainer>
      <SingleAttendee/>
    </AttendeeContainer>
  )
}

AttendeeArea.propTypes = {

}

export default AttendeeArea
