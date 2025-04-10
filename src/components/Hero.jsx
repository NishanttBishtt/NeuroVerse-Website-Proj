import React, { useEffect, useState } from 'react'
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { Typewriter } from 'react-simple-typewriter';
function Hero() {
    
        const [showSecond, setShowSecond] = useState(false)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setShowSecond(true)
        },1500)
        return ()=> clearTimeout(timer)
    },[])
    return (
        <div className='flex flex-col items-center mt-6 lg:mt-20'>
            <h1 className='text-center text-4xl lg:text-7xl tracking-wide sm:text-6xl '>
                <Typewriter
                words={['VirtualR build tools']}
                 loop = {1}
                 typeSpeed={60}
                 deleteSpeed={50}
                 delaySpeed={1000}
                 />
        <span className='bg-gradient-to-r from-blue-500 to-purple-800 text-transparent bg-clip-text ml-2'>
                {showSecond && (
          <Typewriter
          key={showSecond}
            words={['for developers']}
            loop={1}
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        )}
        </span>
                </h1>
                <p className='text-center max-w-4xl leading-8 text-lg mt-10 text-zinc-500 '>
                    Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
                </p>
                <div className='flex justify-center items-center my-10'>
                <a className='bg-gradient-to-r from-blue-500 to-blue-800 px-4 py-3 rounded-md mx-3 ' href="#">Start for free</a>
                <a className='py-3 px-4 border mx-3 rounded-md' href="#">Documentation</a>
                </div>
                <div className='flex mt-10 justify-center'>
                    <video className='w-1/2 mx-2 my-4 rounded-lg border-blue-700 border shadow-blue-500' autoPlay loop muted src={video2}>Your browser does not support video</video>
                    <video className='w-1/2 mx-2 my-4 rounded-lg border-blue-700 border shadow-blue-500' autoPlay loop muted src={video1}>Your browser does not support video</video>
                </div>
        </div>
    )
}

export default Hero
