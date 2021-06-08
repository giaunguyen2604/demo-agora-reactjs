import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from 'components/VideoPlayer'

const ContentArea = props => {
  return (
    <div style={{height: '550px', border: '1px solid black'}}>
      <VideoPlayer/>
    </div>
  )
}

ContentArea.propTypes = {

}

export default ContentArea
