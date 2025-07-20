

const VIDEO_STORAGE_KEY = "face-tracker-videos";

export function saveVideoToStorage(url) {
  const videos = getAllVideos();
  const id = Date.now();
  videos.push({ id, url });
  localStorage.setItem(VIDEO_STORAGE_KEY, JSON.stringify(videos));
}

export function getAllVideos() {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(VIDEO_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function deleteVideo(id) {
  const videos = getAllVideos().filter((v) => v.id !== id);
  localStorage.setItem(VIDEO_STORAGE_KEY, JSON.stringify(videos));
}
