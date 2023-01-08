import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function PartnersComponet() {
    const partners = [
        {
            name: "Dixie Cullen Interests",
            url: "",
            description:"Negotiated and implemented long term and secure storage for equipment valued at over $100m"
        },
        {
            name: "Embassy of Malawi",
            url: "",
            description:"Replacing the VRF (Variable Refrigerant Flow) Systems for a four-story building in Washington, DC. We was Provided Mold Remediation and Environmental Cleanup services in multi-story building in Washington DC"
        },
        {
            name: "Hoffman Sheet Metals",
            url: "",
            description:""
        },
        {
            name: "Malawi Government - Ministry of Foreign Affairs",
            url: "",
            description:""
        },
        {
            name: "Malawi Permanent Missions of the Republic of Malawi to the UN",
            url: "",
            description:""
        }

    ]
    return (
        <div className="mx-auto max-w-7xl sm:px-2 sm:py-8 lg:px-4">


            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Our Partners</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Partners.</p>
                </div>
                <div className="border-t border-gray-300 px-4 py-5 sm:p-0">

                            <dl className="sm:divide-y sm:divide-gray-200">
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-900">
                                       PARTNERS
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">COMMENTS</dd>
                                </div>
                            </dl>
                        </div>
                {
                    partners.map((partner, key) => {
                        return <div key={key} className="border-t border-gray-300 px-4 py-5 sm:p-0">

                            <dl className="sm:divide-y sm:divide-gray-200">
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-700">
                                       {partner.name}
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-500 sm:col-span-2 sm:mt-0">{partner.description}</dd>
                                </div>
                            </dl>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
