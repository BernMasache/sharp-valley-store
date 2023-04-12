import React from "react"
import Router from "next/router"
import Swal from "sweetalert2"
import Cookies from "js-cookie"
import Link from "next/link"
import useCrypto from "../../services/encrypt/crypto"
import HeaderPage from "./header"
import { HomeIcon } from '@heroicons/react/20/solid'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const crypto = new useCrypto()
export default function Partners(props) {

    const textReplace = (text) => {
        const newText = text.replace("/", 'sharp');
        return newText
    }
    const isEven = (number) => {
        let value = false
        if (number % 2 == 0) {
            value = true
        } else {
            value = false
        }
        console.log(value);
        return value
    }
    return (
        <div className="relative isolate bg-white">
            <HeaderPage page={"Partners"} />

            <div className="pt-8 pb-48 sm:pt-8">

                <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
                    <svg viewBox="0 0 1313 771" aria-hidden="true" className="ml-[max(50%,38rem)] w-[82.0625rem]">
                        <path
                            id="bc169a03-3518-42d4-ab1e-d3eadac65edc"
                            fill="url(#85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3)"
                            d="M360.508 589.796 231.671 770.522 0 498.159l360.508 91.637 232.034-325.485c1.485 150.396 51.235 393.965 238.354 165.069C1064.79 143.261 1002.42-107.094 1171.72 46.97c135.44 123.252 148.51 335.641 138.11 426.428L971.677 339.803l24.062 411.461-635.231-161.468Z"
                        />
                        <defs>
                            <linearGradient
                                id="85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3"
                                x1="1313.17"
                                x2="-88.881"
                                y1=".201"
                                y2="539.417"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9089FC" />
                                <stop offset={1} stopColor="#FF80B5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end">
                    <svg
                        viewBox="0 0 1313 771"
                        aria-hidden="true"
                        className="ml-[-22rem] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                    >
                        <use href="#bc169a03-3518-42d4-ab1e-d3eadac65edc" />
                    </svg>
                </div>

                {/* Product grid */}
                <section aria-labelledby="products-heading" className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
                    <h2 id="products-heading" className="sr-only">
                        Products
                    </h2>

                    <div className="-mx-px grid grid-cols-1 sm:mx-0 md:grid-cols-1 lg:grid-cols-1 gap-5">
                        {props && props.partners == undefined ? "" : props.partners.map((partner, key) => (
                            <div className="" key={key}>
                                {/* <div aria-hidden="true" className="hidden h-full w-full lg:block mx-auto max-w-7xl " /> */}
                                {
                                    isEven(key) == true ? <div className="px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">

                                        <div className="">
                                            <img
                                                id={partner.id}
                                                src={partner.logo}
                                                alt={partner.imageAlt}
                                                className="h-80 w-full object-cover object-center"
                                            />

                                        </div>
                                        <div className="bg-gray-200 text-center">
                                            <div className="mt-4 place-content-center rounded-md p-4 space-y-4">

                                                <p className="font-bold text-xl text-gray-900">{partner.name}</p>

                                                <p className="text-gray-600 text-start">{partner.description}</p>
                                                <div className="text-center">
                                                        <span className="p-2 text-3xl text-sharp rounded cursor-pointer hover:bg-gray-300 uppercase">View partner</span>
                                                    </div>
                                            </div>
                                        </div>


                                    </div>
                                        : <div className="px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                                            <div className="bg-gray-200 text-center">
                                                <div className="mt-4 place-content-center rounded-md p-4 space-y-4">

                                                    <p className="font-bold text-xl text-gray-900">{partner.name}</p>

                                                    <p className="text-gray-600 text-start">{partner.description}</p>
                                                    <div className="text-center ">
                                                        <span className="p-2 text-3xl text-sharp rounded cursor-pointer hover:bg-gray-300 uppercase">View partner</span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="">

                                                <img
                                                    id={partner.id}
                                                    src={partner.logo}
                                                    alt={partner.imageAlt}
                                                    className="h-80 w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                }
                            </div>


                            // <Link
                            //     href={{
                            //         pathname: `/partners/partner/${partner.id}`,
                            //         query: {
                            //             data: crypto.encrypt(partner)
                            //         },
                            //     }}
                            //     // as={`/partners/partner/${crypto.encrypt(partner)}`}

                            //     key={key} id={key} className="group p-2 relative border-r border-b border-gray-200 cursor-pointer">
                            //     <div id={partner.id} className="aspect-w-1 aspect-h-1 overflow-hidden bg-gray-200 group-hover:opacity-75">
                            //         <img
                            //             id={partner.id}
                            //             src={partner.logo}
                            //             alt={partner.imageAlt}
                            //             className="h-full w-full object-fit object-center"
                            //         />
                            //     </div>

                            // </Link>
                        ))}
                    </div>
                </section>
            </div>

        </div>
    )
}
