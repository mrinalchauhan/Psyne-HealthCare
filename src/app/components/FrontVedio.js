import React from 'react';

const FullScreenVideo = () => {
    return (
        <section className="relative w-full h-screen">
            <video
                src="/frontvedio.mp4" // Replace with the actual path to your video file
                type="video/mp4"  // Ensure the type matches your video format
                className="absolute top-0 left-0 w-full h-full object-cover"
                controls
                autoPlay
                loop
                muted
            />
        </section>
    );
};

export default FullScreenVideo;
