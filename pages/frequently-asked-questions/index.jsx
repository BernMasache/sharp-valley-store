import React from 'react';
import FAQsWidget from "../../components/widgets/footer/faqs"
function index(props) {
    return (
        <div>
            <div className="bg-white relative sm:pb-32 py-2 lg:py-2">

                <div className="relative">
                    <div className="relative overflow-hidden bg-sky-300 py-24 px-8 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
                        <div className="absolute inset-0 opacity-50 mix-blend-multiply saturate-0 filter">
                            <img
                                src="./tools/finding-temporary-housing-while-building-a-home-1200x800.jpg"
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="relative lg:col-span-1">

                            <h2 className="text-3xl text-gray-700 font-bold tracking-tight sm:text-4xl">FAQs</h2>
                            <blockquote className="mt-6 text-white">
                                <p className="text-xl text-white font-medium sm:text-2xl">
                                    “Nothing in this world is more simple and more cheap than making cities that provide better for people.” – Jan Gehl
                                </p>
                            </blockquote>
                        </div>
                    </div>

                </div>
            </div>
            <FAQsWidget />
            <footer className="bg-white mb-8" aria-labelledby="footer-heading">

                <div className="mt-12 border-t border-warm-gray-200 pt-8">
                    <p className="text-base text-warm-gray-400 xl:text-center">
                        &copy; {new Date().getFullYear()} Sharp Valley Holdings Co. All rights reserved.
                    </p>
                </div>

            </footer>
        </div>
    );
}

export default index;