import {
    AcademicCapIcon,
    BanknotesIcon,
    CheckBadgeIcon,
    ClockIcon,
    ReceiptRefundIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

const equipments = [


    {
        title: 'Machinery',
        href: '#',
        description: " Arranged delivery of critical infrastructure for clients from the USA to Malawi, and Zambia during the pandemic"

    },
    {
        title: 'Brick Layer',
        href: '#',
        description: " Guided foreign organization shopping for technology in the USA, set up secure communications, meetings, and review of contracts"


    },
    {
        title: 'Cement Mixer',
        href: '#',
        description: " Guides transportation companies shopping for trucks in the United States and Europe"


    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function EquipmentsUsed() {
    return (
        <div className="">
            <div className="bg-white">
                <div className="bg-white relative sm:pb-32 py-2 lg:py-2">

                    <div className="relative">
                        <div className="relative overflow-hidden bg-sky-300 py-24 px-8 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
                            <div className="absolute inset-0">
                                <img
                                    src="./tools/finding-temporary-housing-while-building-a-home-1200x800.jpg"
                                    alt=""
                                    className="h-full w-full object-cover"
                                />
              <div className="absolute inset-0 bg-brown opacity-60 mix-blend-multiply" aria-hidden="true" />

                            </div>
                            <div className="relative lg:col-span-1">

                                <h2 className="text-3xl text-gray-100 font-bold tracking-tight sm:text-4xl">Procurement</h2>
                                <blockquote className="mt-6 text-white">
                                   
                                    <p className="text-xl text-white font-medium sm:text-xl">
                                    Sharp Valley transforms your procurement efforts using necessary insights, sourcing expertise, and experience that translates to clients operational efficiencies and cost savings.
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mx-auto max-w-md sm:max-w-3xl sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="divide-y divide-warm-gray-200">

                        <section aria-labelledby="location-heading">

                            {/* <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center p-4 mb-4">Quality Equipments</h2> */}

                            <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-50 p-4 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                                {equipments.map((action, actionIdx) => (
                                    <div
                                        key={action.title}
                                        className={classNames(
                                            actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                                            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                                            actionIdx === equipments.length - 2 ? 'sm:rounded-bl-lg' : '',
                                            actionIdx === equipments.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                                            'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                                        )}
                                    >
                                        <div className="m-4">
                                            <h3 className="text-lg font-medium">
                                                <a href={action.href} className="focus:outline-none">
                                                    {/* Extend touch target to entire panel */}
                                                    <span className="absolute inset-0" aria-hidden="true" />
                                                    {/* {action.title} */}
                                                </a>
                                            </h3>
                                            <p className="mt-2 font-medium text-lg text-gray-700">
                                             <span className='font-medium text-gray-900'>(</span> {actionIdx+1} <span className='font-medium text-gray-900'>)</span> {action.description}
                                            </p>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </section>


                    </div>
                </div>

            </div>
            <footer className="bg-white mb-8 p-4" aria-labelledby="footer-heading">

                <div className="mt-12 border-t border-warm-gray-200 pt-8">
                    <p className="text-base text-warm-gray-400 xl:text-center">
                        &copy; {new Date().getFullYear()} Sharp Valley Holdings Co. All rights reserved.
                    </p>
                </div>

            </footer>
        </div>
    )
}
