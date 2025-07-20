
"use client";

import { useRef, useState } from "react";
import { saveVideoToStorage } from "@/utils/localStorage";

export default function Recorder({ stream, refresh }) {
  const mediaRecorderRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [tempUrl, setTempUrl] = useState(null);

  const startRecording = () => {
    const chunks = [];
    const recorder = new MediaRecorder(stream);

    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      setTempUrl(url);
    };

    recorder.start();
    mediaRecorderRef.current = recorder;
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  const saveVideo = () => {
    saveVideoToStorage(tempUrl);
    setTempUrl(null);
    refresh?.(); 
  };

  const cancelVideo = () => {
    setTempUrl(null);
  };

  return (
    <div className="text-center mt-6">
      {!recording ? (
        <button
          onClick={startRecording}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all"
        >
          🎥 Start Recording
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-all"
        >
          ⏹ Stop Recording
        </button>
      )}

      {tempUrl && (
  <div className="mt-6">
    <video
      controls
      src={tempUrl}
      className="w-full mb-4 rounded-lg border border-gray-700"
    />
    <div className="flex gap-4 justify-center">
      <button onClick={saveVideo} className="bg-blue-600 px-4 py-2 rounded">
        💾 Save
      </button>
      <a
        href={tempUrl}
        download={`recording-${Date.now()}.webm`}
        className="bg-yellow-600 px-4 py-2 rounded text-white hover:bg-yellow-700 transition"
      >
        ⬇️ Download
      </a>
      <button onClick={cancelVideo} className="bg-gray-600 px-4 py-2 rounded">
         Discard
      </button>
    </div>
  </div>
)}

    </div>
  );
}
