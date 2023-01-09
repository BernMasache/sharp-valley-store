import { NewspaperIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const features = [
  {
    name: 'Sharp Valley Spreads Christmas Cheer at QE2 Hospital Blantyre',
    description: 'Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.',
    icon: NewspaperIcon,
    imageSrc: "./news/Screen-Shot-2019-02-13-at-6.39.38-PM-600x424.png",
    href: "https://www.nyasatimes.com/sharp-valley-holdings-spread-christmas-cheers-childrens-ward-queens-hospital"
  },
  {
    name: 'African Economic Outlook 2019',
    description:
      'Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.',
    icon: NewspaperIcon,
    imageSrc: "./news/Screen-Shot-2019-02-13-at-6.44.59-PM-600x517.png",
    href: "http://https//www.afdb.org/fileadmin/uploads/afdb/Documents/Publications/2019AEO/AEO_2019-EN.pdf"

  },
  {
    name: 'CIA The World Fact Book on Malawi',
    description:
      'Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.',
    icon: NewspaperIcon,
    imageSrc: "./news/cia.jpg",
    href: "https://www.cia.gov/library/publications/resources/the-world-factbook/geos/mi.html"

  },
  {
    name: '2018 Malawi Population and Housing Census',
    description:
      'Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.',
    icon: NewspaperIcon,
    imageSrc: "./news/Census-600x438.png",
    href: "http://www.nsomalawi.mw/images/stories/data_on_line/demography/census_2018/2018%20Population%20and%20Housing%20Census%20Preliminary%20Report.pdf"

  },
]

export default function NewsPage() {
  return (
    <div className="overflow-hidden bg-white">
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

              <h2 className="text-3xl text-gray-100 font-bold tracking-tight sm:text-4xl">News</h2>
              <blockquote className="mt-6 text-white">
                <p className="text-xl text-white font-medium sm:text-2xl">
                  “Nothing in this world is more simple and more cheap than making cities that provide better for people.” – Jan Gehl
                </p>
              </blockquote>
            </div>
          </div>

        </div>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-12 lg:px-12 lg:py-12">


        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">

          <dl className="mt-8 grid grid-cols-1 gap-16 sm:grid-cols-1 sm:gap-x-4 lg:col-span-12 lg:mt-0">
            {features.map((news) => (
              <div key={news.name}>

                <div className="bg-white pt-2 lg:py-4">
                  <div className="bg-gray-500 pb-4 lg:relative lg:z-10 lg:pb-0">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                      <div className="relative lg:-my-4">
                        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
                        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                          <div className="aspect-w-16 aspect-h-16 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                            <img
                              className="object-cover lg:h-full lg:w-full"
                              src={news.imageSrc}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 lg:col-span-2 lg:m-0 lg:pl-8">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                          <blockquote>
                            <div>

                              <div className="">
                                <NewspaperIcon className='h-12 w-12 text-white opacity-75' />
                              </div>
                              <p className="mt-6 text-xl text-white">
                                {news.name}
                              </p>
                            </div>
                            <footer className="mt-6">

                              <Link target="_blank" rel="" href={news.href} className="bg-transparent hover:bg-blue text-gray-100 font-semibold hover:text-gray-300 py-2 px-4 border border-blue hover:border-transparent rounded">Read full story</Link>

                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
