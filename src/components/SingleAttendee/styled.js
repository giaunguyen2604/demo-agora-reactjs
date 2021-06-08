import styled from "styled-components";

const SingleAttendeeContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: black;
  margin-right: 1rem;
  position: relative;
`;

const AttendeeControl = styled.div`
  position: absolute;
  bottom: 0.3rem;
  background-color: #5e5e5e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 1rem;
  width: 50%;
  height: 2rem;
  border-radius: 0.5rem;
  margin: 0.1rem 0.1rem;
  left: 50%;
  transform: translateX(-50%);
  i {
    cursor: pointer;
    &.fa-camera.camera-off::after {
      position: absolute;
      content: "/";
      color: #757474;
      font-weight: 900;
      font-size: 22px;
      left: 28%;
      top: 0%;
    }
  }
`;

export { SingleAttendeeContainer, AttendeeControl };
