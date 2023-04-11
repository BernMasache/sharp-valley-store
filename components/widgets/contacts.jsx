export default function ContactSection() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find us using the below details
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
              <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">USA Office</h3>
              <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p>14150 Huffmeister Rd, 200 #099</p>
                <p>Cypress, Texas 77429</p>
                <p>+1 (972) 310 0977</p>
                <p>contact@sharpvalley.com</p>

              </address>
            </div>
            <div>
              <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Malawi Office</h3>
              <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p>New Gulliver, 7th Street</p>
                <p>P.O. Box 40394</p>
                <p>Kanengo, Lilongwe 4</p>
                <p>+265 888 815 932</p>

              </address>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
  