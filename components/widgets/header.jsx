export default function HeaderPage(props) {
    return (
        <div className="mx-auto max-w-7xl bg-gray-100 mt-4 mb-4 md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1 p-4">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    {props.page}
                </h2>
            </div>
            <div className="sr-only mt-4 flex md:mt-0 md:ml-4">
                <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="ml-3 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                    Publish
                </button>
            </div>
        </div>
    )
}
