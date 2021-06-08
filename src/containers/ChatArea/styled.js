import styled from 'styled-components'

const ChatAreaContainer = styled.div`
  padding: .5rem .5rem;
  position: relative;
  height: 100%;
  background-color: #ffffff;
`
const ChatDisplayArea = styled.div`
  height: 88%;
  width: 95%;
  top: .5rem;
  position: absolute;
  box-shadow: 0px 0px 20px 0px rgba(87,82,82,0.75);
  padding: .5rem .5rem;
  background-color: #ffffff;
`
export { ChatDisplayArea, ChatAreaContainer }