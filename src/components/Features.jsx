import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { BotMessageSquare, BatteryCharging, Fingerprint, ShieldHalf, PlugZap, GlobeLock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Features() {
    const cardsRef = useRef([]);

    const features = [
        {
            icon: <BotMessageSquare />,
            text: "Drag-and-Drop Interface",
            description:
                "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
        },
        {
            icon: <Fingerprint />,
            text: "Multi-Platform Compatibility",
            description:
                "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
        },
        {
            icon: <ShieldHalf />,
            text: "Built-in Templates",
            description:
                "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
        },
        {
            icon: <BatteryCharging />,
            text: "Real-Time Preview",
            description:
                "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
        },
        {
            icon: <PlugZap />,
            text: "Collaboration Tools",
            description:
                "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
        },
        {
            icon: <GlobeLock />,
            text: "Analytics Dashboard",
            description:
                "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
        },
    ];

    useEffect(() => {
        cardsRef.current.forEach((card, i) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        end: 'top 90%',
                        toggleActions: 'play none none none',
                        scrub: 4
                    },
                }
            );
        });
    }, []);

    return (
        <div id='features' className=' relative mt-20 border-b min-h-[800px] border-neutral-700'>
            <div className='text-center'>
                <a className='bg-zinc-800/50 text-blue-500 text-sm font-medium px-2 py-1 rounded-full' href="#">FEATURE</a>
                <h1 className='my-20 sm:text-5xl text-3xl lg:text-7xl'>Easily build{" "}
                    <span className='bg-gradient-to-r from-blue-500 to-purple-800 text-transparent bg-clip-text'>
                        your code
                    </span>
                </h1>
            </div>
            <div className='flex flex-wrap mt-10 lg:mt-20'>
                {features.map((items, index) => (
                    <div
                        key={index}
                        ref={el => (cardsRef.current[index] = el)}
                        className='w-full sm:w-1/2 lg:w-1/3 px-4 mb-10'
                    >
                        <div className='flex'>
                            <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full'>
                                {items.icon}
                            </div>
                            <div>
                                <h3 className='mb-4 mt-1 text-xl'>{items.text}</h3>
                                <p className='text-zinc-500 p-2 lg:text-lg tracking-wider mr-16 sm:mr-0'>{items.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;
