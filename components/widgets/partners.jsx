
import Swal from "sweetalert2"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const partners = [
    {
        id: 1,
        name: "Dixie Cullen Interests Inc.",
        logo: "./partners/dixie-cullen-logo-400px.jpg",
        description: "Negotiated and implemented long term and secure storage for equipment valued at over $100m"
    },
    {
        id: 2,
        name: "Embassy of Malawi",
        logo: "./partners/417089ada9d00222e1ab37a5a66f035f.jpeg",
        description: "Replacing the VRF (Variable Refrigerant Flow) Systems for a four-story building in Washington, DC. We was Provided Mold Remediation and Environmental Cleanup services in multi-story building in Washington DC"
    },
    {
        id: 3,
        name: "Hoffman Sheet Metals",
        logo: "./partners/index.jpeg",
        description: "Hoffman Sheet Metal Inc is a family owned and operated business in Southern Maryland; and has been proudly serving the MD/DC/VA area since 1987.  Offering a range of services for residential and light commercial customers including but not limited to; heating, A/C, sheet metal fabrication, air quality, maintenance contracts and free estimates."
    },
    {
        id: 4,
        name: "GHT Consulting Limited",
        logo: "./partners/GHT-Limited_Raster_2C.jpg",
        description: "We consistently discover new solutions in architectural engineering by applying creative thinking to proven design strategies, with a focus on practical results. GHT’s informed approach will help you develop, design, build, and operate successful buildings."
    },
    {
        id: 5,
        name: "Malawi Permanent Missions of the Republic of Malawi to the UN",
        logo: "./partners/417089ada9d00222e1ab37a5a66f035f.jpeg",
        description: ""
    }
  

]

export default function Example() {
    const partnerDetails = (e) => {
        Swal.fire({
            position: 'top',
            toast: true,
            titleText: partners[e.target.id-1].name,
            showCancelButton: false,
            showConfirmButton: true,
            color: '#2f2709',
            width: 600,
            timer:30000,
            html: partners[e.target.id-1].description,
            buttonsStyling: false,
            customClass: {
                container: 'text-xs text-danger-200',
                actions: 'space-x-2',
                confirmButton: 'capitalize inline-flex items-center font-semibold bg-white px-3 py-2 text-sm font-medium leading-4 text-sharp  rounded-sm focus:outline-none hover:bg-gray-200 focus:ring-2 focus:ring-danger-500 focus:ring-offset-2',
                cancelButton: ' capitalize inline-flex items-center font-semibold bg-white px-3 py-2 text-sm font-medium leading-4 text-danger-700  rounded-sm focus:outline-none hover:bg-danger-100 focus:ring-2 focus:ring-danger-500 focus:ring-offset-2'
            }
        })
    }
    return (
        <div className="relative isolate bg-white pt-24 pb-48 sm:pt-24">
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

                <div className="-mx-px grid grid-cols-1 border-l border-gray-200 sm:mx-0 md:grid-cols-2 lg:grid-cols-5">
                    {partners.map((partner, key) => (
                        <div key={key} id={key} onClick={partnerDetails} className="group relative border-r border-b border-gray-200 cursor-pointer">
                            <div id={partner.id} className="aspect-w-1 aspect-h-1 overflow-hidden bg-gray-200 group-hover:opacity-75">
                                <img
                                    id={partner.id}
                                    src={partner.logo}
                                    alt={partner.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>

                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}
