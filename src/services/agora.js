import React, { useEffect, useRef, useState } from 'react'
import AgoraRTC  from 'agora-rtc-sdk-ng'

export default AgoraRTC;
export * from 'agora-rtc-sdk-ng';

const createClient = (config) => {
  let client
  function createClosure() {
    if (!client) {
      client = AgoraRTC.createClient(config)
    }
    return client
  }
  return () => createClosure()
}

function createMicrophoneAndCameraTracks(
  audioConfig,
  videoConfig
) {
  let tracks = null
  async function createClosure() {
    tracks = await AgoraRTC.createMicrophoneAndCameraTracks(
      audioConfig,
      videoConfig
    )
    return tracks
  }
  return function useMicrophoneAndCameraTracks() {
    const [ready, setReady] = useState(false)
    const ref = useRef(tracks)

    useEffect(() => {
      if (ref.current === null) {
        createClosure().then((tracks) => {
          ref.current = tracks
          setReady(true)
        })
      } else {
        setReady(true)
      }
      return () => {
        tracks = null
      }
    }, [])
    return { ready, tracks: ref.current }
  }
}

function createBufferSourceAudioTrack(
  config
) {
  let track = null
  async function createClosure() {
    track = await AgoraRTC.createBufferSourceAudioTrack(config)
    return track
  }
  return function useBufferSourceAudioTrack() {
    const [ready, setReady] = useState(false)
    const ref = useRef(track)

    useEffect(() => {
      if (ref.current === null) {
        createClosure().then((track) => {
          ref.current = track
          setReady(true)
        })
      } else {
        setReady(true)
      }
      return () => {
        track = null
      }
    }, [])
    return { ready, track: ref.current }
  }
}

function createCameraVideoTrack(config) {
  let track = null
  async function createClosure() {
    track = await AgoraRTC.createCameraVideoTrack(config)
    return track
  }
  return function useCameraVideoTrack() {
    const [ready, setReady] = useState(false)
    const ref = useRef(track)

    useEffect(() => {
      if (ref.current === null) {
        createClosure().then((track) => {
          ref.current = track
          setReady(true)
        })
      } else {
        setReady(true)
      }
      return () => {
        track = null
      }
    }, [])
    return { ready, track: ref.current }
  }
}

function createCustomAudioTrack(config) {
  let track = null
  async function createClosure() {
    track = await AgoraRTC.createCustomAudioTrack(config)
    return track
  }
  return function useCustomAudioTrack() {
    const [ready, setReady] = useState(false)
    const ref = useRef(track)

    useEffect(() => {
      if (ref.current === null) {
        createClosure().then((track) => {
          ref.current = track
          setReady(true)
        })
      } else {
        setReady(true)
      }
      return () => {
        track = null
      }
    }, [])
    return { ready, track: ref.current }
  }
}

function createCustomVideoTrack(config) {
  let track= null
  async function createClosure() {
    track = await AgoraRTC.createCustomVideoTrack(config)
    return track
  }
  return function useCustomVideoTrack() {
    const [ready, setReady] = useState(false)
    const ref = useRef(track)

    useEffect(() => {
      if (ref.current === null) {
        createClosure().then((track) => {
          ref.current = track
          setReady(true)
        })
      } else {
        setReady(true)
      }
      return () => {
        track = null
      }
    }, [])
    return { ready, track: ref.current }
  }
}

function createMicrophoneAudioTrack(
  config
) {
  let track = null
  async function createClosure() {
    track = await AgoraRTC.createMicrophoneAudioTrack(config)
    return track
  }
  return function useMicrophoneAudioTrack() {
    const [ready, setReady] = useState(false)
    const ref = useRef(track)

    useEffect(() => {
      if (ref.current === null) {
        createClosure().then((track) => {
          ref.current = track
          setReady(true)
        })
      } else {
        setReady(true)
      }
      return () => {
        track = null
      }
    }, [])
    return { ready, track: ref.current }
  }
}

function createScreenVideoTrack(
  config,
  withAudio
) {
  let tracks
  async function createClosure() {
    tracks = await AgoraRTC.createScreenVideoTrack(config, withAudio)
    return tracks
  }
  return function useScreenVideoTrack() {
    const [ready, setReady] = useState(false)
    const ref = useRef(tracks)

    useEffect(() => {
      if (ref.current === undefined) {
        createClosure().then((tracks) => {
          ref.current = tracks
          setReady(true)
        })
      } else {
        setReady(true)
      }
    }, [])
    return { ready, tracks: ref.current }
  }
}


const AgoraVideoPlayer = (props) => {
  const vidDiv= useRef(null)
  const { videoTrack, ...other } = props;
  useEffect(() => {
    if (videoTrack === null) return
    if (vidDiv.current !== null) videoTrack.play(vidDiv.current)
    return () => {
      videoTrack.stop()
    }
  }, [videoTrack])

  return <div {...other} ref={vidDiv} />
}

export {
  createClient,
  createMicrophoneAndCameraTracks,
  createBufferSourceAudioTrack,
  createCameraVideoTrack,
  createCustomAudioTrack,
  createCustomVideoTrack,
  createMicrophoneAudioTrack,
  createScreenVideoTrack,
  AgoraVideoPlayer
}