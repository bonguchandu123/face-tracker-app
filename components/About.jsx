"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 py-20 text-center"
    >
      {/* Gradient Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
        About Face Tracker
      </h2>

      <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
        This app uses <span className="text-blue-400 font-semibold">MediaPipe</span> for real-time face mesh tracking right inside your browser. No backend, no uploads — just fast, secure and private face tracking with optional local video recording.
      </p>

   
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 md:p-10 shadow-xl backdrop-blur-lg text-left max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-semibold text-blue-400 mb-4 text-center">
          🔍 Key Features
        </h3>
        <ul className="list-disc space-y-3 text-gray-300 pl-5">
          <li>⚡ Real-time facial landmark tracking using MediaPipe</li>
          <li>🎥 Record face-tracking videos directly in browser</li>
          <li>💾 Save recordings locally with one click</li>
          <li>📱 Fully responsive and mobile-friendly</li>
          <li>🔒 No data is sent to any server — 100% private</li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
