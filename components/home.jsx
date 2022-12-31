import { Fragment, useEffect, useRef, useState } from 'react'
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon, LinkIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Disclosure, Menu, Popover, Transition } from '@headlessui/react'

import styles from '../styles/Home.module.css'
import AllCompounds from './widgets/footer/compounds'
import Processes from './widgets/footer/ourProcesses'
import FAQsWidget from './widgets/footer/faqs'
import axios from 'axios'
import Swal from 'sweetalert2'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HomeComponent() {
  const inputEl = useRef(null);

  const footerNavigation = {
    social: [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/SharpValleyHolding',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      }
    ],
  }


  // subscribe to news letter
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const getEmail = (e)=>{

    setEmail(e.target.value)

  }
  const subscribe = async (e) => {
    e.preventDefault()
    setState('Loading')

    try {

      const response = await axios.post('/api/subscribe', { email })
     
      setState('Success')
      setEmail('')

      Swal.fire({
        icon:"success",
        title: 'Subscribed!',
        text: 'Successfully subscribed to our news letter',
        position:"center",
        showConfirmButton:false,
        width:"2rem"
      })

    } catch (e) {
      Swal.fire({
        icon:"error",
        title: 'Failed!',
        text: 'Failed to subscribed to our news letter, check your email or network connection',
        position:"center",
        showConfirmButton:false,
        width:"22rem"
        
      })

      setErrorMsg("Error occured: Check your email or network connection")
      setState('Error')
    }
  }


  return (
    <div className={styles.main}>

      <div className="bg-white relative sm:pb-32 py-2 lg:py-2">

        <div className="relative overflow-hidden bg-sky-300 py-4 px-8 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
          <div className="absolute inset-0 opacity-50 mix-blend-multiply saturate-0 filter">
            <img
              src="./assets/images/Slide-Show-3-.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative lg:col-span-1">
            <div className="p-4">
              <h1 className='text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl'>
                WHAT WE DO
              </h1>
            </div>
            <blockquote className="mt-6 text-white">
              <div className="">
                <p className="text-sm font-normal sm:text-2xl">
                  Sharp Valley has interests in real estate development, investing brokerage, sales and marketing, hotel collection and property management.

                </p>

              </div>
              <p className="text-sm font-normal sm:text-2xl">

                Our business model is accredited as one of the most innovative business ideas to hit the market in southern Africa.
                Home ownership is becoming a reality to many middle-class households, building wealth and moving up the economic ladder.
              </p>

            </blockquote>
          </div>
        </div>


      </div>
      <main>

        <div className="bg-white">
          {/* className="mx-auto max-w-md py-2 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8" */}
          <div>
            <div className="divide-y">
              <section aria-labelledby="location-heading">
                <Processes />
              </section>

              <section className='mt-4'>
                <AllCompounds />
              </section>

              <section className="mt-16 pt-16 " aria-labelledby="location-heading">

                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-center text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight">
                    INVESTMENT OPPORTUNITIES

                  </h3>
                  <hr className='mt-4' />
                  <p className="text-lg text-gray-600 mt-2">
                    The middle class in sub-Saharan African nations is growing quickly as is the demand for decent and affordable housing. Home ownership is on the rise and is a marketable investment for both home owners and real estate investors.
                    Investors from around the world now have access to impactful investment opportunities on the African continent. Good returns on vetted and well managed investments that have a positive impact on local economies, are now a transparent reality.

                  </p>
                </div>


              </section>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-warm-gray-50">
          <div className="mx-auto max-w-md py-8 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <FAQsWidget />
          </div>
        </div>

        {/* Newsletter */}
        <div className="relative p-4">
          <div className="absolute left-0 right-0 h-1/2 bg-warm-gray-50" aria-hidden="true" />
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="rounded-3xl bg-gradient-to-l from-sky-800 to-cyan-700 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20 lg:px-20">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-bold tracking-tight text-white">Sign up for our news-letter</h2>
                <p className="mt-4 max-w-3xl text-lg text-cyan-100">
                  Get updates via our news-letter.
                </p>
              </div>
              <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form className="sm:flex" onSubmit={subscribe}>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    onChange={getEmail}
                    id="email-input"
                    name="email"
                    placeholder="you@awesome.com"
                    ref={inputEl}
                    required
                    type="email"
                    autoComplete="email"
                    className="w-full rounded-md border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700"
                  />
                  
                  <button
                    type="submit"
                    className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-5 py-3 text-base font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-cyan-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  >
                    Notify me
                  </button>
                </form>
                <div className="mt-2 p-2">
                {state === 'Error' && (
                    <span className="error-state">{errorMsg}</span>
                  )}
                  {state === 'Success' && (
                    <span className='text-white'>Awesome, you subscribed!</span>
                  )}
                </div>
                <p className="mt-3 text-sm text-cyan-100">
                  We care about the protection of your data. Read our{' '}
                  <a href="#" className="font-medium text-white underline">
                    Privacy Policy.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>



      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-md py-12 px-4 sm:max-w-3xl sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">

            <div className="space-y-8 xl:col-span-1">
              <div>
                <img
                  className="h-20"
                  src="./assets/images/sharpvalley.com_files/Sharp-Valley-1-e1550352772192-300x70.png"
                  alt="Company name"
                />

                <div className="mt-9">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>+1 (972) 504 3766</p>
                      <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                    </div>
                  </div>
                  <div className="mt-6 flex">
                    <div className="flex-shrink-0">
                      <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>contact@sharpvalley.com</p>
                    </div>
                  </div>

                  <div className="mt-6 flex">
                    <div className="flex-shrink-0">
                      <MapPinIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>P.O. Box 40394 Kanengo Lilongwe 4</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="space-y-8 xl:col-span-1">
              <div>
                <LinkIcon className="h-12 w-12 text-gray-500" aria-hidden="true" />

                <div className="mt-3">
                  <p className="text-lg text-gray-500">
                    Making the world a better place through developing affordable housing.
                  </p>
                </div>
                <div className="mt-9">
                  <div className="flex space-x-6">
                    {footerNavigation.social.map((item) => (
                      <a key={item.name} href={item.href} className="text-warm-gray-400 hover:text-warm-gray-500">
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    ))}
                  </div>


                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-warm-gray-200 pt-8">
            <p className="text-base text-warm-gray-400 xl:text-center">
              &copy; {new Date().getFullYear()} Sharp Valley Holdings Co. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
