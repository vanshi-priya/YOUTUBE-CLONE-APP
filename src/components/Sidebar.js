import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 pt-5 shadow-lg w-96">
        <ul className="m-5 shadow-sm "> 
            <li><Link to="/">🏡Home</Link></li>
            <br />
            <li>📹Shorts</li>
            <br />
            <li>➕Subscriptions</li>
        </ul>

        <h1 className="font-bold pt-5">Your Channel</h1>
        <br />
        <ul className="m-3 shadow-sm"> 
            <li>⌚History</li>
            <br />
            <li>⏯️Playlists</li>
            <br />
            <li>📽️Your Videos</li>
            <br />
            <li>⏱️Watch Later</li>
            <br />
            <li>👍Liked Videos</li>
        </ul>

        <h1 className="font-bold pt-5">Explore</h1>
        <br />
        <ul className="m-3 shadow-sm"> 
            <li>📈Trending</li>
            <br />
            <li>🛒Shopping</li>
            <br />
            <li>🎵Music</li>
            <br />
            <li>🎞️Films</li>
            <br />
            <li>🏅Sports</li>
            <br />
            <li>🎮Gaming</li>
            <br />
            <li>📰News </li>
            <br />
            <li>💡Courses</li>
            <br />
            <li>🛜Podcasts </li>
        </ul>
      
    </div>
  )
};

export default Sidebar;
