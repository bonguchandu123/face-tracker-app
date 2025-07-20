export default function Footer() {
  return (
    <footer className="relative w-full mt-24 border-t border-gray-800/50 bg-[#0a0a0f] backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>
            Built with <span className="text-pink-400">❤</span> by{" "}
            <span className="text-blue-400 font-medium">Face Tracker</span>
          </p>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} All rights reserved</p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/bonguchandu123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bongu-chandu-a29a02322/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="bonguchandu7829@gmail.com"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
