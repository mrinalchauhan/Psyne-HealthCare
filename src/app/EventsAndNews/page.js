"use client";
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Events from "@/app/components/Events";
import EventHeading from "@/app/components/eventHeading";

const EventPage = () => {
    // Define animations for the page
    const pageProps = useSpring({
        from: { opacity: 1, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { tension: 120, friction: 20 },
    });

    return (
        <animated.div style={pageProps} className="p-4 md:p-8 lg:p-12">
            <EventHeading />
            <Events />
        </animated.div>
    );
};

export default EventPage;
