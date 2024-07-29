// MeetingGrid.jsx

import React, { useState } from "react";
import { useMeeting } from "@videosdk.live/react-sdk";
import ParticipantView from "./ParticipantView";

function MeetingGrid({ meetingId }) {
  const [joined, setJoined] = useState(false);
  const { join, leave, toggleMic, toggleWebcam, toggleScreenShare, participants } = useMeeting();

  const joinMeeting = () => {
    setJoined(true);
    join();
  };

  return (
    <div>
      <header>Meeting Id: {meetingId}</header>
      {joined ? (
        <div>
          <button onClick={leave}>Leave</button>
          <button onClick={toggleMic}>Toggle Mic</button>
          <button onClick={toggleWebcam}>Toggle Webcam</button>
          <button onClick={toggleScreenShare}>Toggle Screen Share</button>
        </div>
      ) : (
        <button onClick={joinMeeting}>Join</button>
      )}
      <div className="wrapper">
        {participants.map((participant) => (
          <ParticipantView key={participant.id} participant={participant} />
        ))}
      </div>
    </div>
  );
}

export default MeetingGrid;
