import React, {useState} from 'react';

const VideoCard = ({ info }) => {
    console.log(info);

    const { snippet, statistics } = info;  
    const { channelTitle, title, thumbnails } = snippet;
    const [isHovered, setIsHovered] = useState(false);
    
   

  return (
    <div className='p-4 ml-4 mt-2 w-96 h-[370px] shadow-lg pt-2'
        onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>

{isHovered ? (
        <iframe
          className="rounded-t-lg w-full h-52"
          src={`https://www.youtube.com/embed/${info.id}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="autoplay"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
      <img className='rounded-lg w-full h-52 transition-transform duration-200 hover:scale-105 hover:opacity-80' alt='thumbnail' src={thumbnails.medium.url}/>
    )}
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
};
    

 
export const AdVideoCard = ({ info }) => {
  const { snippet } = info;
  const { title, thumbnails, description } = snippet || {};
  const [isHovered, setIsHovered] = useState(false);

  
  return (
    <div className="p-4 ml-4 mt-2 mb-16 w-96 shadow-lg border border-gray-200 rounded-lg"  
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>

{isHovered ? (
        <iframe
          className="rounded-t-lg w-full h-52"
          src={`https://www.youtube.com/embed/${info.id}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="autoplay"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
      <img
        className="rounded-t-lg w-full h-52 object-cover transition-transform duration-200 hover:scale-105 hover:opacity-50"
        alt="thumbnail"
        src={thumbnails?.medium?.url || '/placeholder.jpg'}
      />
    )}
      <div className="p-3">
        <span className="text-xs text-gray-500 font-semibold">Sponsored • AD </span>
        <h3 className="font-semibold text-md mt-2 truncate">{title}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
      </div>
  </div>
 );
};

export default VideoCard;
