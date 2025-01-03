import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
return (
    <div>
    <ReactPlayer url={url} controls width="100%" />
    </div>
);
};

export default VideoPlayer;
