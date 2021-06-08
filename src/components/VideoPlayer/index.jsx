import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

const VideoPlayer = props => {
  return (
    <ReactPlayer 
    url='https://www.youtube.com/watch?v=377AQ0y6LPA' 
    width="100%"
    height="100%"/>
  )
}

VideoPlayer.propTypes = {

}

export default VideoPlayer
