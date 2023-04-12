export default function HeaderPage(props) {
    return (
        <div className="py-12 sm:py-12">
              {/* <div className="bg-white relative sm:pb-32 py-2 lg:py-2">
                <div className="relative"> */}
                    <div className="relative isolate overflow-hidden bg-sky-300 py-24 px-8 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
                        <div className="absolute inset-0">
                            <img
                                src="./tools/finding-temporary-housing-while-building-a-home-1200x800.jpg"
                                alt=""
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-brown opacity-60 mix-blend-multiply" aria-hidden="true" />

                        </div>
                        <div className="relative lg:col-span-1">

                            <h2 className="text-3xl text-gray-100 font-bold tracking-tight sm:text-4xl">{props.page}</h2>
                            
                        </div>
                    </div>

                {/* </div>
            </div> */}
        </div>
    )
}
