
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import ProjectTemplate from '../layouts/projectTemplate'

const tabs = [
    {
        name: '500 Dwelling Housing',
        features: [
            {
                name: 'Interior and Exterior Designs',
                description:
                    'Sharp Valley Holdings LLC is developing affordable housing nationwide.',
                location: "Blantyre, Lilongwe and Mzuzu",
                investment: "Construction of dwelling units in blocks of Flats with ancillary works",
                estimatedCost: "US$27,131,900 US dollars",
                imageSrc: './project/materials/01-1024x683.png',
                imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
                relatedMaterial: "./project/materials/Screen-Shot-2019-04-02-at-9.01.20-PM-768x731.png"
            },
        ],
    },
    {
        name: 'Nanjiri Lilongwe',
        features: [
            {
                name: 'Plots for Sale',
                description:
                    'Located between Bunda turnoff and Nanjiri',
                imageSrc: './project/materials/01-1024x683.png',
                imageAlt:
                    'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
            },
        ],
    },
    {
        name: 'Natural Resource College Lilongwe',
        features: [
            {
                name: 'Plots for Sale',
                description:
                    "Plots",
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg',
                imageAlt: 'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.',
            },
        ],
    },
    {
        name: 'Mpempa Blantyre',
        features: [
            {
                name: "Plots for Sale",
                description:
                    'Plots',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
                imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
            },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Projects() {
    return (
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

                            <h2 className="text-3xl text-gray-700 font-bold tracking-tight sm:text-4xl">Projects</h2>
                            <blockquote className="mt-6 text-white">
                                <p className="text-xl text-white font-medium sm:text-2xl">
                                    Building is about getting around the obstacles that are presented to you.
                                </p>
                                <p className="">
                                    We shape our buildings; thereafter, they shape us.
                                </p>
                            </blockquote>
                        </div>
                    </div>

                </div>
            </div>

            <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                    <div className="max-w-3xl">
                        <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Our Projects
                        </h2>
                        <p className="mt-4 text-gray-500">
                            The Organize modular system offers endless options for arranging your favorite and most used items. Keep
                            everything at reach and in its place, while dressing up your workspace.
                        </p>
                    </div>

                    <Tab.Group as="div" className="mt-4">
                        <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                            <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                                <Tab.List className="-mb-px flex space-x-10">
                                    {tabs.map((tab) => (
                                        <Tab
                                            key={tab.name}
                                            className={({ selected }) =>
                                                classNames(
                                                    selected
                                                        ? 'border-indigo-500 text-indigo-600'
                                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                                    'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                                                )
                                            }
                                        >
                                            {tab.name}
                                        </Tab>
                                    ))}
                                </Tab.List>
                            </div>
                        </div>

                        <Tab.Panels as={Fragment}>
                            {tabs.map((tab) => (
                                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                                    {tab.features.map((feature) => (
                                        <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                                            <div className="mt-6 lg:col-span-8 lg:mt-0">
                                                <ProjectTemplate
                                                    name={tab.name}
                                                    description={feature.description}
                                                    location={feature.location}
                                                    investment={feature.investment}
                                                    estimatedCost={feature.estimatedCost}
                                                    relatedMaterial={feature.imageSrc}
                                                />
                                            </div>
                                            <div className="lg:col-span-4">
                                                <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 sm:aspect-w-5 sm:aspect-h-2">
                                                    <img src={feature.imageSrc} alt={feature.imageAlt} className="object-fill object-center" />
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </section>

            <footer className="bg-white mb-8" aria-labelledby="footer-heading">

                <div className="mt-12 border-t border-warm-gray-200 pt-8">
                    <p className="text-base text-warm-gray-400 xl:text-center">
                        &copy; {new Date().getFullYear()} Sharp Valley Holdings Co. All rights reserved.
                    </p>
                </div>

            </footer>
        </div>
    )
}
