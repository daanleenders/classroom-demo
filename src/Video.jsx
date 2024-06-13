import videoSource from "/video.mp4";
import "./Video.css";
import { useRef } from "react";

function Video() {
  const videoRef = useRef(null);
  function handleStart() {
    videoRef.current.play();
  }
  return (
    <div className="videoContainer">
      <video src={videoSource} ref={videoRef} />
      <div className="controls">
        <button onClick={handleStart}>Start</button>
      </div>
    </div>
  );
}

export default Video;
