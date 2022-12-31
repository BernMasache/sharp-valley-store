import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = {


    projects: {
        title: "PROJECT (PROPERTY) DEVELOPMENT ",
        questions: [
            {
                question: "Why would I want to participate in crowd funding for a project (property)? ",
                answer:
                    "In most African countries, the traditional method a developer has used in the past in order to raise capital involved burdensome collateral requirements, unreasonably high interest rates, lack of access to interested investors, and proof of occupancy. Doing business this way has almost always brought true and high quality real estate development to a reluctant pace. Project crowd funding is a state-of-the-art solution of pitching one’s project to interested audiences around the world in order to raise funds.",
            },
            {
                question: "What is crowd funding for a project (property)? ",
                answer:
                    "Using an online platform, it is a way of funding the development of a project, usually a property or properties, by raising capital through a large number of individuals. The platform facilitates the exchange between investors and the project/property developers by bringing them together. Investors can be from across the world. Sharp Valley is the platform. ",
            },
        ]
    },

    investors: {
        title: "INVESTORS",
        questions: [
            {
                question: "What is the process to become an investor on Sharp Valley?",
                answer:
                    "Membership is free. Investors from around the globe can join. Please send us an email and one of our team members will follow up directly with you. ",
            },
            {
                question: "What is the due diligence process on the project?  ",
                answer:
                    "All projects are properly vetted by real estate experts and conveyancing professionals including our legal team to ensure the security of your investments. ",
            },
            {
                question: "Are my investments secure? ",
                answer:
                    "In the legitimate world, no reputable entity can ever guarantee an investment 100%. An equity investment involves some risk and is not secured but is tied to the performance of the respective project or the company. Each project goes through a meticulous and very thorough vetting process and your funds are actively managed. Funds are released to the project developer at various milestone intervals and the standards and completeness of each stage is inspected on site before the next stage of funds are released. These due diligence steps and many more are in place to minimize the risk for you as an investor as much as possible.",
            },
            {
                question: "What is the time frame that my investment may be tied for? ",
                answer:
                    "Project size and complexity varies. On average your investment will be tied for a minimum of one year to a maximum of three years.",
            },
            {
                question: "Is there a minimum amount in order to begin investing? ",
                answer:
                    "Yes. The minimum threshold varies per project. on average you can participate with a minimum of $2,000.00 (Two thousand U.S.A. Dollars). ",
            },
            {
                question: "What happens if the project (property) developer fails to raise the targeted funding in the planned time frame? ",
                answer:
                    "Sharp Valley uses both its own reserves for investments and that of other like-minded investors. If we fail to raise the target funds for a project, Sharp Valley uses its liquid assets to cover the difference ",
            },
            {
                question: "Can I decide to pull out of a project before it reaches its completion? ",
                answer:
                    "No. It is not possible to pull out until the project is finished. Our projects’ time frame range from 1 year to 3 years. Your commitment is sought for the total duration of the value adding project. ",
            },
            {
                question: "How secure is the Sharp Valley website and its crowd funding capabilities? ",
                answer:
                    "Sharp Valley’s website uses the strongest encryption possible to secure members data and information stored on Linode servers. Linode is constantly scanning the networks and systems supporting our servers to ensure that systems are configured correctly and are up-to-date with the latest patches. Our platform is hosted in Dallas USA which has SOC 2 Type 2 and SOC 3 certifications that are audited annually.",
            },
            {
                question: "Are there different types of project (property) investments that I can invest in on the Sharp Valley platform? ",
                answer:
                    "At Sharp Valley, investors can invest in several different types of real estate projects. Some examples of these projects could be commercial properties, infrastructure related property investments, housing, gated communities, student housing, vacation homes, affordable housing, hotels, and eco-friendly lodges. The time frame of these projects typically range from 1 year to 3 years at Sharp Valley. ",
            },
            {
                question: "What is the membership fee for the Sharp Valley platform? ",
                answer:
                    "Membership is free. ",
            },
            {
                question: "How do I access a particular project (property)? ",
                answer:
                    "Please contact our office via the website, email, or telephone. ",
            },
            {
                question: "Do you take potential and/or existing clients on viewing trips? ",
                answer:
                    "Yes. Please contact our office via the website, email, or telephone. ",
            },
            {
                question: "Do you charge for a viewing tour? ",
                answer:
                    "Our site viewing tours are free. Please contact our office via the website, email, or telephone to schedule your visit. ",
            },
            {
                question: "Where are your offices located? ",
                answer:
                    "Our new office location in Lilongwe is currently being constructed and will be opening soon in 2019. In the meantime, please contact Sharp Valley via the website, email, or telephone. ",
            },
            {
                question: "What is the best way to contact a representative of Sharp Valley? ",
                answer:
                    "Email Sharp Valley at contact@sharpvalley.com or U.S.A. telephone number 972 504 3766. ",
            },
            {
                question: "Do you sell to only Malawians in Diaspora? ",
                answer:
                    "Properties are sold to citizens and legal permanent residents of a particular country only. Foreign investors can partner with citizens and permanent residents in order to invest in the exciting opportunities available locally. ",
            },
            {
                question: "Who is allowed to invest in Sharp Valley projects (properties)? ",
                answer:
                    "Sharp Valley is open to investors from all around the world. ",
            },
            {
                question: "How long has Sharp Valley been in the real estate development industry?",
                answer:
                    "Sharp Valley has a 5 year plus track record of real estate investment and development. ",
            },

            {
                question: "Do you accept installment payments? If so, how many? ",
                answer:
                    "Sharp Valley does not accept installment payments due to the critical due diligence process and efficient project management methodology that we strictly adhere to. Critical milestones are met partly because we ensure that funding is complete from the onset of a project. ",
            },
        ]
    },
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function FAQsWidget() {
    return (
        <div className="bg-gray-50">
            
            <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
                    <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <section className='mt-4'>
                        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                            <h1 className='w-full bg-gray-300 p-4'>{faqs.projects.title}</h1>

                            {faqs.projects.questions.map((faq) => (
                                <Disclosure as="div" key={faq.question} className="pt-6">
                                    {({ open }) => (
                                        <>
                                            <dt className="text-lg">
                                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                                    <span className="font-medium text-gray-900">{faq.question}</span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        <ChevronDownIcon
                                                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-base text-gray-500">{faq.answer}</p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </section>

                    <section className='mt-4'>
                        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                            <h1 className='w-full bg-gray-300 p-4'>{faqs.investors.title}</h1>
                            {faqs.investors.questions.slice(0, 2).map((faq) => (
                                <Disclosure as="div" key={faq.question} className="pt-6">
                                    {({ open }) => (
                                        <>
                                            <dt className="text-lg">
                                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                                    <span className="font-medium text-gray-900">{faq.question}</span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        <ChevronDownIcon
                                                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-base text-gray-500">{faq.answer}</p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </section>

                </div>

            </div>
        </div>
    )
}