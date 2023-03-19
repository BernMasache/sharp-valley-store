import HeaderPage from "./header"

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
                We are a dedicated entity that offers various services to our best of effort to all sectors.
                Sharp Valley has been established as the leading service provider.
                 Sharp Valley is now serving clients with extensive diversity, both by regional footprint and industry.
                </p>
              </div>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                  alt=""
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
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
  