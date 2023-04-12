
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import ProjectTemplate from '../layouts/projectTemplate'
import HeaderPage from './header'

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
                imageAlt: '',
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
                    '',
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
                imageSrc: './project/materials/01-1024x683.png',
                imageAlt: '',
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
                imageSrc: './project/materials/01-1024x683.png',
                imageAlt: '',
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
                <HeaderPage page={"Projects"} />

            </div>

            <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                    <div className="max-w-3xl">
                        <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Our Projects.
                        </h2>
                        <p className="mt-4 text-gray-500">
                            Sharp Valley is the leading provider of Project management services. We use the tools and skills needed to
                            deliver better project outcomes and lead the gold standard in the industry.
                        </p>
                        <p className="mt-4 text-gray-500">
                            At Sharp Valley, we combine leading-edge methodologies, analytics, market intelligence, and industry
                            benchmarks to reduce costs, transform customer operations, and provide on-time delivery.
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
                                            <div className="mt-6 lg:col-span-12 lg:mt-0">
                                                <ProjectTemplate
                                                    name={tab.name}
                                                    description={feature.description}
                                                    location={feature.location}
                                                    investment={feature.investment}
                                                    estimatedCost={feature.estimatedCost}
                                                    relatedMaterial={feature.imageSrc}
                                                />
                                            </div>
                                            <div className="lg:col-span-12 mt-6">
                                                <div className="aspect-w-5 aspect-h-5 overflow-hidden rounded-lg sm:aspect-w-5 sm:aspect-h-5">
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


        </div>
    )
}
