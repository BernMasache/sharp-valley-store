import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function ProjectTemplate(props) {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{props.name}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{props.location}</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Proposed Investment</dt>
            <dd className="mt-1 text-sm text-gray-900">{props.investment}</dd>
          </div>
         
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Estimated Cost</dt>
            <dd className="mt-1 text-sm text-gray-900">{props.estimatedCost}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm text-gray-900">{props.description}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Related Materials</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">Images</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href={props.relatedMaterial} target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:text-indigo-500">
                      View
                    </a>
                  </div>
                </li>
                
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
