"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-16"
    >
      <div className="inline-block relative">
        <div className="absolute -inset-2 blur-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 rounded-2xl"></div>
        <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          AI-Powered Face Tracking Recorder
        </h1>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
      >
        Record and track your face in real-time using MediaPipe & save videos locally.
        Works perfectly on mobile and desktop.
      </motion.p>
    </motion.section>
  );
}
