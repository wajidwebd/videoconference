import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom'

export const Videoconference = () => {
  const {roomId} = useParams();
  const myMeetingconference = async (element)=>{
    const appId= 55078547;
    const serverSecret = '0d4fc124f34b27e764db8bf3e399f76e';
    const kitToken  = ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serverSecret,roomId,Date.now().toString(),'Wajid');
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container:element,
      scenario:{
        mode:ZegoUIKitPrebuilt.VideoConference
      }

    })
  }
  return (
    <div>Videoconference

      <div ref={myMeetingconference}></div>
    </div>
  )
}
