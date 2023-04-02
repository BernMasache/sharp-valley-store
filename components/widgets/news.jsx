import { NewspaperIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import HeaderPage from './header'

const news = [
  {
    id:1,
    name: 'Sharp Valley Spreads Christmas Cheer at QE2 Hospital Blantyre',
    description: 'As Christians are celebrating the birth oHospital(Queens) in the commercial city of Blantyre and donated assorted itmes worth MK300,000.00  Jesus Christ, Sharp Valley Holdings cheered children admitted at Queen Elizabeth Centarl ',
    icon: NewspaperIcon,
    imageSrc: "./news/Screen-Shot-2019-02-13-at-6.39.38-PM-600x424.png",
    href: "https://www.nyasatimes.com/sharp-valley-holdings-spread-christmas-cheers-childrens-ward-queens-hospital"
  },
  {
    id:2,
    name: 'African Economic Outlook 2019',
    description:
      '',
    icon: NewspaperIcon,
    imageSrc: "./news/Screen-Shot-2019-02-13-at-6.44.59-PM-600x517.png",
    href: "http://https//www.afdb.org/fileadmin/uploads/afdb/Documents/Publications/2019AEO/AEO_2019-EN.pdf"

  },
  {
    id:3,
    name: 'CIA The World Fact Book on Malawi',
    description:
      'Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.',
    icon: NewspaperIcon,
    imageSrc: "./news/cia.jpg",
    href: "https://www.cia.gov/library/publications/resources/the-world-factbook/geos/mi.html"

  },
  {
    id:4,
    name: '2018 Malawi Population and Housing Census',
    description:
      'INTRODUCTION The 2018 Population and Housing Census (PHC) is the sixth in the series of conducting censuses in Malawi and it falls in the 2020 round of world censuses advocated by the United Nations. The first census in Malawi was conducted in 1966 with the subsequent ones being conducted in 1977, 1987, 1998 and 2008. Malawi decided to conduct a CAPI census for the first time, a shift from previous censuses which were conducted using Pen and Paper for data collection.',
    icon: NewspaperIcon,
    imageSrc: "./news/Census-600x438.png",
    href: "http://www.nsomalawi.mw/images/stories/data_on_line/demography/census_2018/2018%20Population%20and%20Housing%20Census%20Preliminary%20Report.pdf"

  },
]

export default function Example() {
  return (
    <div className="bg-white">
          <HeaderPage page={"News"}/>
      <div className="px-6 lg:px-8">
        <div className="mx-auto lg:max-w-9xl">
          <p className="sr-only mt-2 text-lg leading-8 text-gray-600">
            
          </p>
          <div className=" mt-4 max-w-7xl grid grid-cols-1 md:grid-cols-1  sm:grid-cols-1 gap-5">
            {news.map((post) => (
              <article key={post.id} className="relative p-4 mt-8 isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={post.imageSrc}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={post.href} target={"_blank"}>
                        <span className="absolute inset-0" />
                        {post.name}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
