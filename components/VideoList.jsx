
"use client";

import { useEffect, useState } from "react";
import { deleteVideo, getAllVideos } from "@/utils/localStorage";

export default function VideoList({ refreshTrigger }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(getAllVideos());
  }, [refreshTrigger]);

  if (!videos.length) return <p className="text-center text-gray-500">No recordings yet.</p>;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {videos.map((video) => (
        <div key={video.id} className="relative border border-gray-700 rounded-lg p-4">
          <video src={video.url} controls className="w-full rounded-lg" />
          <button
            onClick={() => {
              deleteVideo(video.id);
              setVideos(getAllVideos());
            }}
            className="absolute top-2 right-2 bg-red-600 text-sm px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
