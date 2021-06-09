import React from 'react'
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
