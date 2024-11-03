import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  // useEffect(() => {
  //    getVideos();
  // }, []);
  useEffect(() => {
    getVideos();
    const interval = setInterval(getVideos, 60000); // 1 minute interval
    return () => clearInterval(interval); // Cleanup interval
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  const [firstVideo, ...otherVideos] = videos;

  return (
    <div className="flex flex-wrap">
      {/* Render the first video as an AdVideoCard if it exists */}
      {firstVideo && (
        <Link key={firstVideo.id} to={`/watch?v=${firstVideo.id}`}>
          <AdVideoCard info={firstVideo} />
        </Link>
      )}
      {/* Render the rest as regular VideoCards */}
      {otherVideos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
