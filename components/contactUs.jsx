// export default function ContactPage() {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our offices</h2>
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             Kanengo - Lilongwe 4
//           </p>
//         </div>
//         <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
//           <div>
//             <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Address</h3>
//             <address className="border-l border-gray-200 pt-2 pl-6 not-italic text-gray-600">
//               <p>P.O Box 40394</p>
//               <p>Kanengo, Lilongwe 4</p>
//             </address>
//           </div>
//           <div>
//             <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Phone</h3>
//             <address className="border-l border-gray-200 pt-2 pl-6 not-italic text-gray-600">
//               <p>+1 (972) 504 3766</p>
//             </address>
//           </div>
//           <div>
//             <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Email</h3>
//             <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
//               <p>contact@sharpvalley.com</p>
//             </address>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2'
import Router from 'next/router';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import HeaderPage from './widgets/header';
export default function ContactPage() {
    const [state, handleSubmit] = useForm("mrgvpvqb");
    if (state.succeeded) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Email sent successfully',
            showConfirmButton: true,
            timer: 3000
        });

        Router.push("/home")
    }

    return (
        <div className="bg-gray-100">
            <HeaderPage page={"Contact us"}/>
            <div className="">

                <div className="mx-auto max-w-7xl py-8 px-6 sm:py-8 lg:px-8">
                    <div className="relative bg-white shadow-xl">
                        <h2 className="sr-only">Contact us</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            {/* Contact information */}
                            <div className="relative overflow-hidden bg-sharp py-10 px-6 sm:px-10 xl:p-12">
                                <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
                                    <svg
                                        className="absolute inset-0 h-full w-full"
                                        width={343}
                                        height={388}
                                        viewBox="0 0 343 388"
                                        fill="none"
                                        preserveAspectRatio="xMidYMid slice"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                            fill="url(#linear1)"
                                            fillOpacity=".1"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="linear1"
                                                x1="254.553"
                                                y1="107.554"
                                                x2="961.66"
                                                y2="814.66"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#fff" />
                                                <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div
                                    className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                                    aria-hidden="true"
                                >
                                    <svg
                                        className="absolute inset-0 h-full w-full"
                                        width={359}
                                        height={339}
                                        viewBox="0 0 359 339"
                                        fill="none"
                                        preserveAspectRatio="xMidYMid slice"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                            fill="url(#linear2)"
                                            fillOpacity=".1"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="linear2"
                                                x1="192.553"
                                                y1="28.553"
                                                x2="899.66"
                                                y2="735.66"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#fff" />
                                                <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div
                                    className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                                    aria-hidden="true"
                                >
                                    <svg
                                        className="absolute inset-0 h-full w-full"
                                        width={160}
                                        height={678}
                                        viewBox="0 0 160 678"
                                        fill="none"
                                        preserveAspectRatio="xMidYMid slice"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                            fill="url(#linear3)"
                                            fillOpacity=".1"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="linear3"
                                                x1="192.553"
                                                y1="325.553"
                                                x2="899.66"
                                                y2="1032.66"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#fff" />
                                                <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-gray-100 font-semibold uppercase">Contact Us</h3>
                                <p className="mt-6 max-w-3xl text-base text-indigo-50">
                                    If you have anything to say or ask, please, leave a message below and we will help you accordingly.

                                </p>
                                <dl className="mt-8 space-y-6">
                                    <dt >
                                        <span className="text-gray-100 font-semibold uppercase">Address</span>
                                    </dt>
                                    <div className="flex gap-x-4">

                                        <dt className="flex-none">
                                            <BuildingOffice2Icon className="h-7 w-6 text-gray-100" aria-hidden="true" />
                                        </dt>
                                        <address className="border-l border-gray-200 pt-2 pl-6 not-italic text-gray-100">
                                            <p>P.O Box 40394</p>
                                            <p>Kanengo, Lilongwe 4</p>
                                        </address>
                                        {/* <dd className='text-gray-100'>
                                        545 Mavis Island
                                        <br />
                                        Chicago, IL 99191
                                    </dd> */}
                                    </div>
                                    <dt >
                                        <span className="text-gray-100 font-semibold uppercase">Phone number</span>
                                    </dt>
                                    <dd className="flex text-base text-indigo-50">
                                        <PhoneIcon className="h-6 w-6 flex-shrink-0 text-indigo-200" aria-hidden="true" />
                                        <span className="ml-3">+1 (972) 310 0977</span>
                                    </dd>
                                    <dt>
                                        <span className="text-gray-100 font-semibold uppercase">Email</span>
                                    </dt>
                                    <dd className="flex text-base text-indigo-50">
                                        <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-indigo-200" aria-hidden="true" />
                                        <span className="ml-3">contact@sharpvalley.com</span>
                                    </dd>
                                </dl>
                                <ul role="list" className="sr-only mt-8 flex space-x-12">
                                    <li>
                                        <a className="text-indigo-200 hover:text-indigo-100" href="#">
                                            <span className="sr-only">Facebook</span>
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-indigo-200 hover:text-indigo-100" href="#">
                                            <span className="sr-only">GitHub</span>
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-indigo-200 hover:text-indigo-100" href="https://twitter.com/GremaPvtSchools">
                                            <span className="sr-only">Twitter</span>
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact form */}
                            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                                <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
                                <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                                            Name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="given-name"
                                                placeholder='enter your first name here...'
                                                className="block w-full bg-gray-100 rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                            <ValidationError
                                                prefix="Firstname"
                                                field="firstname"
                                                errors={state.errors}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                                            Email Address
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                autoComplete="given-name"
                                                placeholder='enter your email address'
                                                className="block w-full bg-gray-100 rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                            <ValidationError
                                                prefix="Email"
                                                field="email"
                                                errors={state.errors}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                                            Company
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="company"
                                                id="company"
                                                autoComplete="company-name"
                                                placeholder='enter company name here...'
                                                className="block w-full bg-gray-100 rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                            <ValidationError
                                                prefix="company"
                                                field="company"
                                                errors={state.errors}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                                                Phone Number
                                            </label>

                                        </div>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                autoComplete="tel"
                                                placeholder='enter your phone number here...'
                                                className="block bg-gray-100 w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                aria-describedby="phone-optional"
                                            />
                                            <ValidationError
                                                prefix="Phome"
                                                field="phone"
                                                errors={state.errors}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <div className="flex justify-between">
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                                                Message
                                            </label>
                                            <span id="message-max" className="text-sm text-gray-500">
                                                Max. 500 characters
                                            </span>
                                        </div>
                                        <div className="mt-1">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                placeholder="enter your message here..."
                                                className="block bg-gray-100 w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                aria-describedby="message-max"
                                                defaultValue={''}
                                            />
                                            <ValidationError
                                                prefix="Message"
                                                field="message"
                                                errors={state.errors}
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                                        <button

                                            type="submit"
                                            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-sharp px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                        >
                                            Send
                                            {/* <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=Sending mails&body=all content" target="_blank">
                                            Send
                                        </Link> */}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

