


import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import HeaderPage from './header'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TravelPage() {
  return (
    <div className="bg-white">
      <HeaderPage page={"Travel"} />
      <div className="mx-auto  py-16 px-6 lg:px-8 max-w-7xl text-base leading-7 text-gray-700">
        {/* <HeaderPage page={"Travel"}/> */}
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let&apos;s Travel</h1>
        <p className="mt-6 text-xl leading-8">
          Sharp Valley is a recognized thought and practice leader in the travel business helping international
          organizations and government institutions advance their businesses worldwide.
        </p>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="./travel/Suv.png"
            alt="suv for travelling"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Premium SUV
          </figcaption>
        </figure>
        <div className="mt-10 max-w-7xl">

          <div className="bg-white">
            <div className="mx-auto max-w-2xl py-8 sm:py-8 lg:max-w-7xl">
              <div className="flex items-center justify-between space-x-4">
                <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-700 sm:text-xl">Some of the corporate Events we offer travelling services</h2>

              </div>
              <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
                {
                  [
                    {
                      id: 1,
                      event: "United Nations",
                      description: "General Assemblies",
                      imageSrc: "./travel/united-nations.png",
                      imageAlt: ""
                    },
                    {
                      id: 1,
                      event: "COP Conference",
                      description: "COP conference",
                      imageSrc: "./travel/cop22.jpg",
                      imageAlt: ""
                    },
                    {
                      id: 1,
                      event: "World Cup and Olympics",
                      description: "World cup",
                      imageSrc: "./travel/world-cup.png",
                      imageAlt: ""
                    }
                  ]
                    .map((product) => (
                      <div key={product.id} className="group relative">
                        <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                          <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
                          <div className="sr-only flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
                            <div className="w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                              View Product
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">
                              <span aria-hidden="true" className="absolute inset-0" />
                              {product.event}
                            </a>
                          </h3>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
