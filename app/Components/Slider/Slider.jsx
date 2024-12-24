"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { videos } from "./video";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
});
const Slider = () => {
  const sliderRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClient, setIsClient] = useState(false);
  return (
    <>
      <div className="container">
        <div className="slider" ref={sliderRef}>
          {videos.map((video, index) => (
            <div className="card" key={`${video?.id}${index}`}>
              <div className="card-info">
                <div className="card-item">
                  <p>{video.date}</p>
                </div>
                <div className="card-item">
                  <p>{video.title}</p>
                </div>
                <div className="card-item">
                  <p>{video.category}</p>
                </div>
              </div>
              <div className="video-player">
                <ReactPlayer
                  url={`https://www.vimeo.com/${video.id}`}
                  controls={false}
                  autoPlay={true}
                  loop
                  playing
                  muted
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
