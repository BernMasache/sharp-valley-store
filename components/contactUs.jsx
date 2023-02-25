export default function ContactPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our offices</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kanengo - Lilongwe 4
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Address</h3>
            <address className="border-l border-gray-200 pt-2 pl-6 not-italic text-gray-600">
              <p>P.O Box 40394</p>
              <p>Kanengo, Lilongwe 4</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Phone</h3>
            <address className="border-l border-gray-200 pt-2 pl-6 not-italic text-gray-600">
              <p>+1 (972) 504 3766</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Email</h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>contact@sharpvalley.com</p>
            </address>
          </div>
          
        </div>
      </div>
    </div>
  )
}
