import { HomeIcon } from '@heroicons/react/20/solid'

const pages = [
  { name: 'Efficiency and effective', href: '#', current: false },
  { name: 'Inclusivity', href: '#', current: true },
]

export default function Efficiency() {
  return (
    <nav className="flex pt-8" aria-label="Breadcrumb">
      <ol role="list" className="flex space-x-4 bg-sharp rounded-md px-6 shadow">
        <li className="flex">
          <div className="flex items-center">
            <a href="#" className="text-gray-50 hover:text-gray-100">
              {/* <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" /> */}
              <span className="">Excellence</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className="flex">
            <div className="flex items-center">
              <svg
                className="h-full w-6 flex-shrink-0 text-gray-50"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <a
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-50 hover:text-gray-200"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
