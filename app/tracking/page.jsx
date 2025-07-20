
"use client";

import FaceTracker from "@/components/FaceTracker";
import Recorder from "@/components/Recorder";
import { useState } from "react";

export default function TrackingPage() {
  const [stream, setStream] = useState(null);
  const [refreshCount, setRefreshCount] = useState(0);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white p-4 pt-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
        Live Face Tracking
      </h1>
      <p className="text-center text-gray-400 mb-6">
        Start your camera to track your face using Mediapipe and record it.
      </p>
      <FaceTracker onStreamReady={setStream} />
      {stream && (
        <Recorder
          stream={stream}
          refresh={() => setRefreshCount((prev) => prev + 1)}
        />
      )}
    </div>
  );
}
