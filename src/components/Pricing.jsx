import { CheckCircle2 } from 'lucide-react';
import React from 'react'

function Pricing() {
    const pricingOptions = [
        {
            title: "Free",
            price: "$0",
            features: [
                "Private board sharing",
                "5 Gb Storage",
                "Web Analytics",
                "Private Mode",
            ],
        },
        {
            title: "Pro",
            price: "$10",
            features: [
                "Private board sharing",
                "10 Gb Storage",
                "Web Analytics (Advance)",
                "Private Mode",
            ],
        },
        {
            title: "Enterprise",
            price: "$200",
            features: [
                "Private board sharing",
                "Unlimited Storage",
                "High Performance Network",
                "Private Mode",
            ],
        },
    ];

    return (
        <div id='pricing' className='mt-20 px-4 lg:px-40 sm:px-8 md:px-7'>
            <div className='text-center text-5xl lg:text-6xl w-full'>
                <h1>Pricing</h1>
            </div>
            <div className=' flex flex-wrap '>
                {pricingOptions.map((items, index) => (
                    <div key={index} className="w-full mt-10 sm:w-1/2 lg:w-1/3 p-4 flex justify-center">
                    <div className="w-full max-w-sm p-8 border rounded-xl border-zinc-800 flex flex-col justify-between h-full ">
                      <div>
                        <h2 className=" text-4xl xl:text-5xl lg:text-3xl mb-8">
                          {items.title}
                          {items.title === "Pro" && (
                            <span className="bg-gradient-to-r lg:text-sm lg:tracking-wide tracking-tight from-blue-500 to-purple-800 bg-clip-text text-transparent text-xl">
                              {" "} (Most Popular)
                            </span>
                          )}
                        </h2>
                        <p className="mb-8 text-4xl lg:text-5xl">
                          {items.price}
                          <span className="text-zinc-700 text-xl"> /Month</span>
                        </p>
                        <ul className="space-y-8">
                          {items.features.map((feature, i) => (
                            <li key={i} className="flex text-lg items-center">
                              <CheckCircle2 className="text-blue-500" />
                              <span className="ml-2 tracking-tight">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href="#"
                        className="inline-flex mt-8 justify-center items-center text-xl border-blue-900 hover:bg-blue-900 border rounded-xl transition duration-200 h-12"
                      >
                        Subscribe
                      </a>
                    </div>
                  </div>
                  
                ))}
            </div>
        </div>

    )
}

export default Pricing
