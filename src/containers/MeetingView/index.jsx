import React,  { useEffect, useState } from 'react'
import AttendeeArea from 'containers/AttendeeArea'
import ChatArea from 'containers/ChatArea'
import ContentArea from 'containers/ContentArea'
import PropTypes from 'prop-types'
import { MeetingContainer, ContentAttendeeContainer, ChatContainer } from './styled'
import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks} from 'services/agora'
import { agoraConfig } from 'constants/index'

const useClient = createClient(agoraConfig);
const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

const MeetingView = props => {
  const [attendees, setAttendees] = useState([])
  const [start, setStart] = useState(false);
  const { ready, tracks } = useMicrophoneAndCameraTracks();
  const client = useClient();

  const appId = process.env.REACT_APP_ID
  const token= process.env.REACT_APP_TEMP_TOKEN;
  const channelName = process.env.REACT_APP_CHANNEL

  useEffect(() => {
    let init = async (name) => {
      client.on("user-joined", function(user) {
        setAttendees((prevUsers) => {
          const isExist = prevUsers.find(atd => atd.uid === user.uid)
          if (isExist) return [...prevUsers]
          return [...prevUsers, user];
        });
      });

      client.on("user-published", async (user, mediaType) => {

        await client.subscribe(user, mediaType);
        console.log("subscribe success");
        if (mediaType === "video") {
          setAttendees((prevUsers) => {
            const index = prevUsers.findIndex(atd => atd.uid === user.uid)
            console.log("index=",index)
            const newAttendee = [...prevUsers]
            newAttendee[index] = user
            setAttendees(newAttendee)
          })
        }
        if (mediaType === "audio") {
          user.audioTrack?.play();
        }
      });

      client.on("user-unpublished", (user, type) => {
        console.log("unpublished", user, type);
        if (type === "audio") {
          user.audioTrack?.stop();
        }
        // if (type === "video") {
        //   setAttendees((prevUsers) => {
        //     const index = prevUsers.findIndex(atd => atd.uid === user.uid)
        //     console.log("index=",index)
        //     const newAttendee = [...prevUsers]
        //     newAttendee[index] = user
        //     setAttendees(newAttendee)
        //   })
        // }
      });

      client.on("user-left", (user) => {
        console.log("leaving", user);
        setAttendees((prevUsers) => {
          return prevUsers.filter((User) => User.uid !== user.uid);
        });
      });

      await client.join(appId, name, token, null);
      //if (tracks) await tracks[1].setEnabled(false)
      if (tracks) await client.publish([tracks[0], tracks[1]]);
      setStart(true);

    };

    if (ready && tracks) {
      console.log("init ready");
      init(channelName);
    }

    return  () => {
      client.removeAllListeners();
    }

  }, [channelName, client, ready, tracks]);

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
  };

  return (
    <MeetingContainer>
      <ContentAttendeeContainer>
        <ContentArea />
        <AttendeeArea attendees={attendees} tracks={tracks} leaveChannel={leaveChannel}/>
      </ContentAttendeeContainer>
      <ChatContainer>
        <ChatArea />
      </ChatContainer>
    </MeetingContainer>
  )
}

MeetingView.propTypes = {

}

export default MeetingView
