import styled from 'styled-components'

const MeetingContainer = styled.div`
  display: flex; 
  padding: 10px 10px; 
  justify-content: space-between;
`

const ContentAttendeeContainer = styled.div`
  width: 78%; 
  display: flex;  
  flex-direction: column;
`

const ChatContainer = styled.div`
  box-shadow: 0px 0px 27px 0px rgba(87,82,82,0.75);
  width: 18%;

`
export { MeetingContainer, ContentAttendeeContainer, ChatContainer }