import React from 'react';
import { IdentificationIcon, HomeModernIcon, StarIcon, CurrencyDollarIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

const allProcess = [

  {
    name: 'Investors',
    imageSrc: <CurrencyDollarIcon />,
    url: "/contact-us",
    description:
      "We accomodate new and old investors",
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
                Background
              </h2>
              <p className="mt-4 text-gray-500">
                Sharp Valley, is a registered limited liability corporation with head offices in Lilongwe, Malawi. Sharp Valley has been established as the leading service provider of Project Management and Procurement Solutions, eCommerce, and logistics and advisory services to our clients worldwide. With our seven years of experience managing large projects and procurement in logistics, heavy equipment storage, and other supply chain nodes,
                Sharp Valley has helped many of our clients and partners navigate their difficult and challenging projects especially experienced in the last few years under the global pandemic conditions. Our staff has a combined 35 years of experience managing projects of strategic significance for our clients.
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
                  <h1 className="text-2xl font-medium text-gray-900">{key + 1} - {process.name}</h1>
                  <p className="mt-2 text-sm text-gray-500">{process.description}</p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <Link href={process.url} className="text-white bg-slate-500 p-4 text-xl rounded">
                    Contact us</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
