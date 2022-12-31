import React from 'react';
import { CreditCardIcon } from '@heroicons/react/24/outline'

function AboutPage(props) {
    const skills = [


        {
            skill: "Large development projects"
        },
        {
            skill: "Large real-estate transactions"
        },
        {
            skill: "Managing private capital that can withstand various economic cycles"
        },
        {
            skill: "Co-investment partnerships"
        },
        {
            skill: "Operations experience working inside companies"
        },
        {
            skill: "Advisory roles in setting strategy"
        },
        {
            skill: "Connecting appropriate resources"
        },

    ]
    return (
        <div>
            <div className="bg-white">
                <div className="bg-white relative sm:pb-32 py-2 lg:py-2">

                    <div className="relative">
                        <div className="relative overflow-hidden bg-sky-300 py-24 px-8 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
                            <div className="absolute inset-0 opacity-50 mix-blend-multiply saturate-0 filter">
                                <img
                                    src="./tools/finding-temporary-housing-while-building-a-home-1200x800.jpg"
                                    alt=""
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="relative lg:col-span-1">

                                <h2 className="text-3xl text-gray-700 font-bold tracking-tight sm:text-4xl">About Us</h2>
                                <blockquote className="mt-6 text-white">
                                    <p className="text-xl text-white font-medium sm:text-2xl">
                                        “A great building must begin with the immeasurable, must go through measurable means when it is being designed, and in the end must be unmeasured.” – Louis Kahn
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mx-auto max-w-md sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="divide-y divide-warm-gray-200">

                        <section className="" aria-labelledby="location-heading">

                            <div className=" pb-5">
                                <h3 className="text-start text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight">
                                    Who We Are
                                </h3>
                                <p className="text-lg text-gray-600 mt-2">

                                    Sharp Valley has interests in real estate development, investing brokerage, sales and marketing, hotel collection and property management.

                                    Our business model is accredited as one of the most innovative business ideas to hit the market in southern Africa. Home ownership is becoming a reality to many middle-class households, building wealth and moving up the economic ladder.

                                    Our leading product is Value Added plots which have been transformed and made suitable for immediate settlement and futuristic capital gain.

                                </p>
                            </div>
                        </section>

                        <section className="mt-2 pt-2 " aria-labelledby="location-heading">
                            <div className="pb-2">
                                <h3 className="text-start text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight">
                                    Our Vision
                                </h3>
                                <p className="text-lg text-gray-600 mt-2">

                                    Our vision is to be a highly-valued partner by both our portfolio companies and our co-investors seeking investment opportunities.
                                </p>
                            </div>
                        </section>

                        <section className="mt-2 pt-2 " aria-labelledby="location-heading">
                            <div className="pb-2">
                                <h3 className="text-start text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight">
                                    Our Expertise
                                </h3>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                                    <dt className="text-sm font-medium text-gray-500">We have extensive experience in:</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">

                                        <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">

                                            {skills.map((skill, key) => (
                                                <li key={key} className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                    <div className="flex w-0 flex-1 items-center">
                                                        <CreditCardIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                        <span className="ml-2 w-0 flex-1 truncate">{skill.skill}</span>
                                                    </div>

                                                </li>
                                            ))}

                                        </ul>
                                    </dd>
                                </div>


                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <footer className="bg-white mb-8" aria-labelledby="footer-heading">

                <div className="mt-12 border-t border-warm-gray-200 pt-8">
                    <p className="text-base text-warm-gray-400 xl:text-center">
                        &copy; {new Date().getFullYear()} Sharp Valley Holdings Co. All rights reserved.
                    </p>
                </div>

            </footer>
        </div>
    );
}

export default AboutPage;