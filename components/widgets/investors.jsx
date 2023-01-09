import React from 'react';
import { ArrowTopRightOnSquareIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
function Investors(props) {
    const logos = [


        { name: 'Transistor', url: './assets/images/Sharp-Valley-1-e1550352772192-300x70.png' },
        { name: 'Mirage', url: './assets/images/Sharp-Valley-1-e1550352772192-300x70.png' },
        { name: 'Tuple', url: './assets/images/Sharp-Valley-1-e1550352772192-300x70.png' },
    ]
    return (
        <div>
            {/* CTA Section */}
            <div className="relative bg-brown">
                <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                    <img
                        className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                        alt=""
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
                    />
                </div>
                <div className="relative mx-auto max-w-md py-12 px-6 sm:max-w-7xl sm:py-20 md:py-28 lg:px-8 lg:py-32">
                    <div className="md:ml-auto md:w-1/2 md:pl-10">
                        <h2 className="text-lg font-semibold text-gray-300"></h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">One-Step To be an Investor</p>
                        <p className="mt-3 text-lg text-gray-300">
                            Shifting our thinking away from short-term gain toward long-term investment and sustainability
                        </p>
                        <div className="mt-8">
                            <div className="inline-flex rounded-md shadow">
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                >
                                    Contact us for investments details
                                    <ArrowTopRightOnSquareIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Logo cloud section */}
            <div className="mt-4">
                <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-2">
                    <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Our Investors
                            </h2>
                            <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                                Team of investors in different areas within Sharp Valley
                            </p>
                            <div className="mt-6">
                                <a href="#" className="text-base font-medium text-rose-500">
                                    Meet our investors and advisors &rarr;
                                </a>
                            </div>
                        </div>
                        <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                            {logos.map((logo) => (
                                <div key={logo.name} className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                                    <img className="max-h-12" src={logo.url} alt={logo.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Investors;