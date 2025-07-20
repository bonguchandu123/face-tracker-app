

"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { saveVideoToStorage } from "@/utils/localStorage";

export default function FaceTracker() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const recorderRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [tempUrl, setTempUrl] = useState(null);
  const router = useRouter();

  const startRecording = () => {
    const stream = videoRef.current.srcObject;
    const recorder = new MediaRecorder(stream);
    const chunks = [];
    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      setTempUrl(url);
    };
    recorder.start();
    recorderRef.current = recorder;
    setRecording(true);
  };

  const stopRecording = () => {
    recorderRef.current.stop();
    setRecording(false);
  };

  const saveRecording = () => {
    saveVideoToStorage(tempUrl);
    router.push("/recordings");
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const faceMesh = new window.FaceMesh({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });

    faceMesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    faceMesh.onResults((results) => {
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (results.multiFaceLandmarks) {
        results.multiFaceLandmarks.forEach((landmarks) => {
          for (let point of landmarks) {
            ctx.beginPath();
            ctx.arc(point.x * canvas.width, point.y * canvas.height, 2, 0, 2 * Math.PI);
            ctx.fillStyle = "lime";
            ctx.fill();
          }
        });
      }
    });

    const camera = new window.Camera(videoRef.current, {
      onFrame: async () => {
        await faceMesh.send({ image: videoRef.current });
      },
      width: 640,
      height: 480,
    });

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
      camera.start();
    });
  }, []);

  return (
    <div className="space-y-6 px-4">
      {/* Increased height on small devices */}
      <div className="relative w-full h-[75vh] sm:h-[480px] rounded-lg overflow-hidden ring-1 ring-gray-700">
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          playsInline
        />
        <canvas ref={canvasRef} className="absolute w-full h-full" />
      </div>

      <div className="flex gap-4 justify-center">
        {!recording ? (
          <button onClick={startRecording} className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            🎥 Start Recording
          </button>
        ) : (
          <button onClick={stopRecording} className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            ⏹ Stop Recording
          </button>
        )}
      </div>

      {tempUrl && (
        <div className="flex justify-center">
          <button onClick={saveRecording} className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Save & Go to Recordings
          </button>
        </div>
      )}
    </div>
  );
}
