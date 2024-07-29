// JoinScreen.jsx

import React, { useState } from "react";

function JoinScreen({ getMeetingAndToken }) {
  const [meetingId, setMeetingId] = useState("");

  const handleJoin = () => {
    // Logic to join meeting using meetingId
    // You can implement this based on your API integration
    // Example: getMeetingAndToken(meetingId);
  };

  const handleCreateMeeting = () => {
    // Logic to create a new meeting
    // You can implement this based on your API integration
    // Example: getMeetingAndToken();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Meeting Id"
        value={meetingId}
        onChange={(e) => setMeetingId(e.target.value)}
      />
      <button onClick={handleJoin}>Join</button>
      <button onClick={handleCreateMeeting}>Create Meeting</button>
    </div>
  );
}

export default JoinScreen;
