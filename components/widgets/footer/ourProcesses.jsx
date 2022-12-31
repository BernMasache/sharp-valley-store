import React from 'react';
import { IdentificationIcon, HomeModernIcon, StarIcon, LinkIcon, MapPinIcon } from '@heroicons/react/24/outline'

const allProcess = [
    {
      name: 'Identify site',
      imageSrc: <IdentificationIcon/>,
      description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
      name: 'Prospectus',
      imageSrc: <MapPinIcon/>,
      description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
      name: 'Investors',
      imageSrc: <StarIcon/>,
      description:
        "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
    {
        name: 'Market Plots',
        imageSrc: <HomeModernIcon/>,
        description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
      },
      {
        name: 'Sell Plots',
        imageSrc: <HomeModernIcon/>,
        description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
      },
      {
        name: 'Housing Association',
        imageSrc: <LinkIcon/>,
        description:
          "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
      },
  ]
  

  export default function Processes() {
    return (
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                  Our Process
                </h2>
                <p className="mt-4 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus similique, 
                  reiciendis illum cumque et nemo omnis officia molestias iste ut placeat minus 
                  quisquam aperiam deserunt voluptas rem eaque veniam aspernatur.
                </p>
              </div>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="./assets/images/Slide-Show-18.jpg"
                  alt=""
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {allProcess.map((process, key) => (
                <div key={key} className="sm:flex lg:block">
                  <div className="w-1/6 sm:flex-shrink-0">
                    {process.imageSrc}
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{key+1} - {process.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  