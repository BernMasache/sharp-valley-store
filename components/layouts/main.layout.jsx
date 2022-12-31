import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import styles from "../../styles/Home.module.css"
import Link from 'next/link'
const navigation = {
    mainNave: [
        { name: 'Home', href: '/home' },
        { name: 'Management Team', href: 'management-team' },
        { name: 'Projects', href: '/projects' },
        { name: 'Quality Used Equipment', href: '/quality-used-equipment' },
        { name: 'About', href: '/about' },
        { name: 'Contact Us', href: '/contact-us' },
        { name: 'News', href: '/news' },
        { name: 'FAQs', href: '/frequently-asked-questions' },
    ],

    categories: [
        {
            name: 'Sharp Valley',
            categories: [
                { name: 'Home', href: '/home' },
                { name: 'Management Team', href: 'management-team' },
                { name: 'Projects', href: '/projects' },
                { name: 'Quality Used Equipment', href: '/quality-used-equipment' },
                { name: 'About', href: '/about' },
                { name: 'Contact Us', href: '/contact-us' },
                { name: 'News', href: '/news' },
                { name: 'FAQs', href: '/frequently-asked-questions' },
            ]
        },

    ]
}


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MainLayout({ children }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    
    return (
        <div className="bg-gray-50">
            <div className='sticky top-0 z-30'>
                {/* Mobile menu */}
                <Transition.Root show={mobileMenuOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>
                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                    <div className="flex px-4 pt-5 pb-2">
                                        <button
                                            type="button"
                                            className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Links */}
                                    <Tab.Group as="div" className="mt-2">
                                        <div className="border-b border-gray-200">
                                            <Tab.List className="-mb-px flex space-x-8 px-4">
                                                {navigation.categories.map((category) => (
                                                    <Tab
                                                        key={category.name}
                                                        className={({ selected }) =>
                                                            classNames(
                                                                selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                                                                'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                                                            )
                                                        }
                                                    >
                                                        {category.name}
                                                    </Tab>
                                                ))}
                                            </Tab.List>
                                        </div>
                                        <Tab.Panels as={Fragment}>
                                            {navigation.categories.map((category, categoryIdx) => (
                                                <Tab.Panel key={category.name} className="space-y-12 px-4 pt-10 pb-6">
                                                    <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                                                        <div className="grid grid-cols-1 gap-y-10 gap-x-6">

                                                            <div>

                                                                <ul role="list" aria-labelledby="mobile-categories-heading" className="mt-6 space-y-6">
                                                                    {category.categories.map((item) => (
                                                                        <li key={item.name} className="flex">
                                                                            <a href={item.href} className="font-medium text-gray-500 hover:text-gray-700">
                                                                                {item.name}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Tab.Panel>
                                            ))}
                                        </Tab.Panels>
                                    </Tab.Group>

                                    <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                        {/* Currency selector */}
                                        <form>
                                            <div className="inline-block">
                                                <label htmlFor="mobile-currency" className="sr-only">
                                                    Currency
                                                </label>
                                                <div className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                                                    <h1 className='text-white'>
                                                        Sharp Valley

                                                    </h1>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <header className="relative ">
                    <nav aria-label="Top">
                        {/* Top navigation */}
                        <div className="bg-gray-900">
                            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                                {/* Currency selector */}
                                <form className="hidden lg:block lg:flex-1">
                                    <div className="flex">
                                        <label htmlFor="Sharp Valley" className="sr-only">
                                            Sharp Valley
                                        </label>
                                        <div className="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
                                            <h1 className='text-white'>
                                                Sharp Valley

                                            </h1>
                                        </div>
                                    </div>
                                </form>

                                
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    
                                    <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
                                    <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                                        {['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'July','Aug','Sep','Oct','Nov','Dec'][new Date().getMonth()]} {new Date().getDay()}, {new Date().getFullYear()}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Secondary navigation */}
                        <div className="bg-white">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="border-b border-gray-200">
                                    <div className="flex h-16 items-center justify-between">
                                        {/* Logo (lg+) */}
                                        <div className="hidden lg:flex lg:items-center">
                                            <a href="#">
                                                <span className="sr-only">Sharpvalley</span>
                                                <img
                                                    className="h-8 w-auto sm:h-10"
                                                    src="./assets/images/sharpvalley.com_files/Sharp-Valley-1-e1550352772192-300x70.png"
                                                    alt=""
                                                />
                                            </a>
                                        </div>

                                        <div className="hidden h-full lg:flex">
                                            {/* Mega menus */}
                                            <Popover.Group className="ml-8">
                                                <div className="flex h-full justify-center space-x-8">
                                                    {navigation.mainNave.map((category, categoryIdx) => (
                                                        <Popover key={category.name} className="flex">
                                                            {({ open }) => (

                                                                <Link href={category.href}
                                                                    className={classNames(
                                                                        open
                                                                            ? 'border-indigo-600 text-indigo-600 flex'
                                                                            : 'border-transparent text-gray-700 hover:text-gray-800',
                                                                        'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                                                    )}
                                                                >
                                                                    {category.name}

                                                                </Link>

                                                            )}
                                                        </Popover>
                                                    ))}

                                                </div>
                                            </Popover.Group>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 sm:hidden" onClose={setMobileFiltersOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filters */}

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className={styles.main}>
                    {children}
                </main>

            </div>
        </div>
    )
}
