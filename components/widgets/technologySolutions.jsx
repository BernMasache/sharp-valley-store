import HeaderPage from "./header"

const incentives = [
  {
    name: 'Free shipping',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: '10-year warranty',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: 'Exchanges',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
]

export default function TechnologySolutions() {
  return (
    <div className="bg-gray-50 h-[100vh]">
      <HeaderPage page={"Technology Solutions"} />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-1">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 md:grid-cols-2">
              {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sr-only"></h2> */}
              <p className="mt-4 leading-7 text-gray-600">
                Sharp Valley provides a comprehensive suite of consulting services to support our clients&apos; diverse
                implementation needs, including project management and process optimization. Sharp Valley also provides
                church management software, school management software, and accounting software.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
