import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from 'components/VideoPlayer'
import { ContentContainer } from './styled'

const ContentArea = props => {
  return (
    <ContentContainer>
      <VideoPlayer/>
    </ContentContainer>
  )
}

ContentArea.propTypes = {

}

export default ContentArea
