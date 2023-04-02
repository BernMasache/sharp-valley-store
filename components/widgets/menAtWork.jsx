import Link from "next/link"

const testimonials = [
    {
        title: 'If a building looks better under construction than it does when finished, then it’s a failure.',
        alt: "",
        imageUrl: './images/IMG-20230222-WA0008.jpg',
        location: "DC Project"
    },
    // More testimonials...
    // {
    //     title: ' Construction is the art of making a meaningful whole out of many parts. Buildings are witnesses to the human ability to construct concrete things.',
    //     alt: "",
    //     imageUrl: './images/IMG-20230222-WA0001.jpg',
    //     location: "DC Project"

    // },
    // {
    //     title: 'If a building looks better under construction than it does when finished, then it’s a failure.',

    //     alt: "",
    //     imageUrl: './images/IMG-20230222-WA0007.jpg',
    //     location: "DC Project"

    // },
    // More testimonials...
    {
        title: 'Comfortable place for your trip. Enjoy the view',

        alt: "",
        imageUrl: './assets/new/IMG-20230330-WA0006.jpg',
        location: "Hotel room"

    },
    {
        title: ' Construction is the art of making a meaningful whole out of many parts. Buildings are witnesses to the human ability to construct concrete things.',

        alt: "",
        imageUrl: './images/IMG-20230222-WA0003.jpg',
        location: "DC Project"

    },
    
]

export default function MenAtWork() {
    return (
        <div className="bg-gray-50 py-8 sm:py-8">
            <div className="mx-auto  px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">

                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Hotel and Construction

                    </p>
                </div>
                <div className="mx-auto mt-4 flow-root max-w-2xl sm:mt-4 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">

                        {
                            testimonials.map((item, key) => {
                                return <div key={key} className="group p-2 relative items-center justify-center overflow-hidden cursor-pointer rounded-lg">
                                    <div className="h-56 w-full">
                                        <img src={item.imageUrl} alt="" className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform" />
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-b from-trabsparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[90%] group-hover:translate-y-0 transition-all">

                                        <p className="text-lg italic text-white mb-3">
                                            {item.title}
                                        </p>

                                        <div className="">
                                            <span className="p-2 rounded text-white text-lg">-- {item.location} --</span>
                                        </div>
                                    </div>
                                </div>

                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
