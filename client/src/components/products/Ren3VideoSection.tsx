import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const mainVideoUrl = "https://ren3.ai/assets/video/vid_main.mp4";

const Ren3VideoSection = () => {
  // Main video state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Handle video playback
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle video mute toggle
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Update progress bar
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  // Auto-play with mute when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
          setIsPlaying(true);
        } else if (videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience ReN3 in Action
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how ReN3 transforms the way businesses interact with AI through a seamless,
            secure, and intelligent platform.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-xl shadow-2xl overflow-hidden group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Highlight border for video */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-gray-700/60 via-gray-500/20 to-gray-700/60 rounded-xl z-0 opacity-70"></div>
            
            {/* Video container */}
            <div className="relative z-10 rounded-xl overflow-hidden bg-gray-900">
              <video
                ref={videoRef}
                src={mainVideoUrl}
                className="w-full h-auto"
                muted={isMuted}
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
              />

              {/* Video controls overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
                  isHovering || !isPlaying ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center">
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mr-3 hover:bg-white/30 transition-colors"
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                  
                  {/* Progress Bar */}
                  <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gray-700 to-gray-500 transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  
                  {/* Volume Toggle */}
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white ml-3 hover:bg-white/30 transition-colors"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>
              </div>
              
              {/* Play button overlay (shows when video is paused) */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    onClick={togglePlay}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 flex items-center justify-center text-white"
                  >
                    <Play size={36} className="ml-2" />
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ren3VideoSection;