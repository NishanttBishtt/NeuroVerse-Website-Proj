import { CheckCircle2 } from 'lucide-react';
import React from 'react'

function Workflow() {
    const checklistItems = [
        {
          title: "Code merge made easy",
          description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
          title: "Review code without worry",
          description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
          title: "AI Assistance to reduce time",
          description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
          title: "Share work in minutes",
          description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        },
      ];
    return (
        
        <div id='workflow' className=' mt-20'>
            <div className="heading sm:text-4xl text-3xl md:text-5xl lg:text-6xl text-center">
                <h1>Accelerate your {" "}
                    <span className='bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text text-transparent'>coding workflow.</span>
                </h1>
            </div>
            <div className=" flex flex-wrap mt-8 justify-center">
                <div className="right p-2 w-full flex justify-end bg-cover bg-center lg:w-1/2 ">
                    <img className='lg:h-150' src="https://raw.githubusercontent.com/kushald/virtualr/refs/heads/main/src/assets/code.jpg" alt="" />
                </div>
                <div className="left pt-12 w-full lg:w-1/2 ">
                    {checklistItems.map((items,index)=>(
                        <div key={index} className='flex mb-12'>
                            <div className='mx-6 bg-neutral-900 rounded-full justify-between items-center h-10 w-10 p-2 text-blue-500'>
                                <CheckCircle2 />
                            </div>
                            <div className='w-1/2 '>
                                <h2 className='text-xl mt-1 mb-2'>
                                    {items.title}
                                </h2>
                                <p className='text-md text-neutral-500'>
                                    {items.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workflow
