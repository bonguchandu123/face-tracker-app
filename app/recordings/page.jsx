"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const VideoList = dynamic(() => import("@/components/VideoList"), { ssr: false });

export default function RecordingsPage() {
  const [refCnt, setRefCnt] = useState(0);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white p-4 pt-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
        Your Recordings
      </h1>
      <p className="text-center text-gray-400 mb-6">
        Browse and manage your previously saved recordings.
      </p>
      <VideoList refreshTrigger={refCnt} />
    </div>
  );
}
