# 🎥 Face Tracker App

A React-based face tracking application using **MediaPipe FaceMesh** and **MediaRecorder API**, which records and stores short face tracking videos locally using `localStorage`.


<img width="1896" height="867" alt="Image" src="https://github.com/user-attachments/assets/89507dfc-f8c4-4fba-99c0-a412b4d15bda" />
---

## 🚀 Features

- 📹 Live face tracking using **MediaPipe**
- 🧠 Real-time mesh overlay on canvas
- 🎞️ Records short video clips
- 💾 Saves recorded videos to browser's `localStorage`
- 🧹 Allows deleting saved videos
- 📱 Mobile responsive UI

---

## 🖼️ Demo

👉 [Click to view live demo](https://face-tracker-app-two.vercel.app/)

---

## 📂 Project Structure
```
.
├── app
│   ├── recordings
│   │   └── page.jsx        # Recordings page to view saved videos
│   ├── tracking
│   │   └── page.jsx        # Main face tracking + recording page
│   ├── favicon.ico
│   ├── globals.css         # Tailwind CSS and global styles
│   ├── layout.js           # Shared layout wrapper
│   └── page.js             # Home page
├── components              # Reusable components
│   ├── ExploreSection.jsx
│   ├── FaceTracker.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Navbar.jsx
│   ├── Recorder.jsx
│   └── VideoList.jsx
├── public                 # Static files (if needed)
├── utils
│   └── localStorage.js     # Utility functions to save/load/delete videos
├── .gitignore
├── README.md
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.js
├── postcss.config.mjs
└── tailwind.config.js
```

## ⚙️ Features
🎥 Face Tracking using MediaPipe

⏺️ Webcam video recording

💾 Save videos using localStorage

🗂️ View and delete previous recordings

⚡ Fast performance with Next.js 15 App Router

🌙 Responsive design with Tailwind CSS



---

## 🛠️ Tech Stack

- **React (Next.js App Router)**
- **MediaPipe** for real-time face tracking
- **MediaRecorder API** to record the canvas stream
- **Tailwind CSS** (for styling, optional)
- **localStorage** for persistent video storage in browser

---

## 🔧 How It Works

1. Accesses the user's webcam.
2. Uses MediaPipe to detect facial landmarks.
3. Draws the landmarks on a `<canvas>` element.
4. Starts recording the canvas stream using `MediaRecorder`.
5. On stop, saves the video blob URL to `localStorage`.
6. Displays all saved videos in a gallery below the tracker.
7. Videos can be deleted individually.

---

## 🧪 Local Development

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/face-tracker-app.git
cd face-tracker-app
```


```

### 2. Install dependencies
npm install

### 3. Run the development server
npm run dev

### Build for Production
npm run build
npm start


```

###  Mobile Responsiveness
The canvas height is adjusted for smaller devices to use more Y-axis space. Tailwind CSS breakpoints or media queries are applied for better experience on phones.





