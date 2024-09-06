// components/PageTransition.js
"use client";
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useRouter } from 'next/navigation';

const PageTransition = ({ children }) => {
    const router = useRouter();
    const [trigger, setTrigger] = useState(false);

    // Use spring to animate the component
    const animationProps = useSpring({
        transform: trigger ? 'translateX(0%)' : 'translateX(50%)',
        opacity: trigger ? 1 : 0,
        config: { tension: 150, friction: 20 },
    });

    useEffect(() => {
        // Trigger animation when route changes
        setTrigger(false); // Start with hidden state
        const timeout = setTimeout(() => setTrigger(true), 10); // Slight delay to apply the animation

        return () => clearTimeout(timeout); // Clean up timeout on component unmount
    }, [router.asPath]); // Depend on route changes

    return (
        <animated.div style={animationProps}>
            {children}
        </animated.div>
    );
};

export default PageTransition;
