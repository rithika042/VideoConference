// ParticipantView.jsx

import React from "react";
import { useParticipant } from "@videosdk.live/react-sdk";

function ParticipantView({ participant }) {
  const {
    displayName,
    webcamStream,
    micStream,
    screenShareStream,
    webcamOn,
    micOn,
    screenShareOn,
  } = useParticipant(participant.id);

  return (
    <div>
      <h2>{displayName}</h2>
      {webcamOn && <video ref={webcamStream} autoPlay />}
      {micOn && <audio ref={micStream} autoPlay />}
      {screenShareOn && <video ref={screenShareStream} autoPlay />}
      <span>Mic: {micOn ? "On" : "Off"}, Camera: {webcamOn ? "On" : "Off"}, Screen Share: {screenShareOn ? "On" : "Off"}</span>
    </div>
  );
}

export default ParticipantView;
