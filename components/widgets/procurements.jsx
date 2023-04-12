import { useState } from "react"
import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'
import HeaderPage from "./header"

const capabilities = [


    {
        id: 1,
        content: 'Manage Procurement Costs',
        target: '',
        href: '#',
        date: 'Sep 20',
        datetime: '2020-09-20',
        icon: CheckIcon,
        iconBackground: 'bg-sharp',
    },
    {
        id: 2,
        content: 'Offsite Procurement Team',
        target: 'Bethany Blake',
        href: '#',
        date: 'Sep 22',
        datetime: '2020-09-22',
        icon: CheckIcon,
        iconBackground: 'bg-sharp',
    },
    {
        id: 3,
        content: 'Fast Response',
        target: 'Martha Gardner',
        href: '#',
        date: 'Sep 28',
        datetime: '2020-09-28',
        icon: CheckIcon,
        iconBackground: 'bg-sharp',
    },
    {
        id: 4,
        content: 'Just-in-time delivery System',
        target: 'Bethany Blake',
        href: '#',
        date: 'Sep 30',
        datetime: '2020-09-30',
        icon: CheckIcon,
        iconBackground: 'bg-sharp',
    },
    {
        id: 4,
        content: 'Global Product Sourcing',
        target: 'Bethany Blake',
        href: '#',
        date: 'Sep 30',
        datetime: '2020-09-30',
        icon: CheckIcon,
        iconBackground: 'bg-sharp',
    },
    {
        id: 4,
        content: '24/7 Support Team',
        target: 'Bethany Blake',
        href: '#',
        date: 'Sep 30',
        datetime: '2020-09-30',
        icon: CheckIcon,
        iconBackground: 'bg-sharp',
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Procurements() {
    const [cabilities, setCapabilities] = useState([
        {}
    ])
    return (
        <div className="bg-white">
            <HeaderPage page={"Procurements"}/>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-7xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-1">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 ">Experience</h2>
                            <p className="mt-4 leading-7 text-gray-600">
                                Sharp Valley has over 8 years of experience supplying various industries in North America, Asia, Africa,
                                Europe, and the Middle East. We serve clients with extensive diversity, both by regional footprint and
                                industry. Our clients span healthcare, pharmaceuticals, military, government, oil and gas, and food and
                                beverage.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Supply</h2>
                            <p className="mt-4 leading-7 text-gray-600">
                                Our range of supplies includes technology, heavy equipment, building materials, food products, fertilizer,
                                vehicles, iron & steel, and Mineral Fuels and Oils.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Shipping and Delivery</h2>
                            <p className="mt-4 leading-7 text-gray-600">
                                We ensure that all details from a source to destination are simple, seamless, and handled in a timely
                                manner. Our materials are sourced globally for our clients, with shipping solutions to all major ports.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Sharp Valley Capabilities</h2>
                            <div className="mt-4 flow-root md:ml-16 lg:ml-16">
                                <ul role="list" className="mb-4 md:mb-16 lg:mb-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
                                    {capabilities.map((event, eventIdx) => (
                                        <li key={event.id}>
                                            <div className="relative pb-8">
                                                {eventIdx !== capabilities.length - 1 ? (
                                                    <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                                ) : null}
                                                <div className="relative flex space-x-3">
                                                    <div>
                                                        <span
                                                            className={classNames(
                                                                event.iconBackground,
                                                                'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                                                            )}
                                                        >
                                                            <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                                                        </span>
                                                    </div>
                                                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                                        <div>
                                                            <p className="font-medium text-sm text-gray-700">
                                                                {event.content}{' '}
                                                                <a href={event.href} className="sr-only font-medium text-gray-900">
                                                                    {event.target}
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <div className="sr-only whitespace-nowrap text-right text-sm text-gray-500">
                                                            <time dateTime={event.datetime}>{event.date}</time>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
