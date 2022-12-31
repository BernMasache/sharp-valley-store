import { BoltIcon, EnvelopeIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Competitive rates',
    description: 'Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Instant transfers',
    description:
      'Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.',
    icon: BoltIcon,
  },
  {
    name: 'Reminder emails',
    description:
      'Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.',
    icon: EnvelopeIcon,
  },
]

export default function NewsPage() {
  return (
    <div className="overflow-hidden bg-white">
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

              <h2 className="text-3xl text-gray-700 font-bold tracking-tight sm:text-4xl">News</h2>
              <blockquote className="mt-6 text-white">
                <p className="text-xl text-white font-medium sm:text-2xl">
                  “Nothing in this world is more simple and more cheap than making cities that provide better for people.” – Jan Gehl
                </p>
              </blockquote>
            </div>
          </div>

        </div>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-40">
        <svg
          className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-100" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">News Section.</h2>
          </div>
          <dl className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
