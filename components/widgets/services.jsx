import HeaderPage from "./header"
import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'
const services = [
  {
    name: 'Procurements solutions',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
    description: "Procurements description",
  },
  {
    name: 'Project Management',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description: "Projects description",
  },
  {
    name: 'Logistics and advisory services ',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
    description:
      "Sample description for logistics and advisory services",
  },
  {
    name: 'eCommerce',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      "description",
  },
  {
    name: 'Technology Solutions',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      "description",
  },
]

const timeline = [


  {
    id: 1,
    content: 'Project management',
    target: '',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: CheckIcon,
    iconBackground: 'bg-sharp',
  },
  {
    id: 2,
    content: 'Procurement solutions',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: CheckIcon,
    iconBackground: 'bg-sharp',
  },
  {
    id: 3,
    content: 'Coporate travel',
    target: 'Martha Gardner',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-sharp',
  },
  {
    id: 4,
    content: 'Technology solutions',
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
export default function Services() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-8 sm:px-2 sm:py-8 lg:px-4">

        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Our Services
              </h2>
              <p className="mt-4 text-gray-500">
                Sharp Valley has been established as the leading service provider of Project Management, procurement
                solutions, travel, and technology solutions to our clients specifically African governments and
                Corporations.
              </p>

              <p className="mt-4 text-gray-500">
                With our eight years of experience managing large projects, procurement, and providing
                accommodation to delegates at large conferences, Sharp Valley has helped many of our clients and
                partners navigate their difficult and challenging projects especially experienced in the last few years
                under the global pandemic conditions. Our staff has a combined 35 years of experience managing
                projects of strategic significance for our clients.
              </p>
              <p className="mt-4 text-gray-500">
                Sharp Valley is now serving clients with extensive diversity, both by regional footprint and industry. Our
                clients span healthcare, pharmaceuticals, military, government, oil and gas, and food and beverage
                industries in North America, Asia, Africa, Europe, and the Middle East.
              </p>
              <div className="mt-4 flow-root">
                <ul role="list" className=" -mb-8">
                  {timeline.map((event, eventIdx) => (
                    <li key={event.id}>
                      <div className="relative pb-8">
                        {eventIdx !== timeline.length - 1 ? (
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
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="./assets/new/IMG-20230330-WA0003.jpg"
                alt=""
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="sr-only mt-16 grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
