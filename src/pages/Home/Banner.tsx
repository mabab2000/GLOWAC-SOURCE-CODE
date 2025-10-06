import  { useState, useEffect, useRef } from "react";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";

export default function Banner() {
  const videos = [video1, video2, video3];
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Move to next video when current ends
  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  // Restart new video when index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentVideo]);

  return (
    <div className="relative mt-10 w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full md:h-full sm:h-300 object-cover"
        src={videos[currentVideo]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      />
    </div>
  );
}
