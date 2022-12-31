import React from 'react';

const featuredProperties = [
    {
        id: 1,
        name: 'Chapima Heights',
        district: "Blantyre",
        href: '#',
        imageSrc: './assets/images/sharpvalley.com_files/Slide7-300x225.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Nanjiri',
        district: "Lilongwe",
        href: '#',
        imageSrc: './assets/images/sharpvalley.com_files/African-Continental-Free-Trade-Agreement-150x150.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Mpemba',
        district: "Blantyre",
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },

]

export default function FeaturedProperties() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">FEATURED PROPERTIES</h2>

                <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {featuredProperties.map((properties, key) => (
                        <div key={properties.id} className="group relative border-black p-4">
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img
                                    src={properties.imageSrc}
                                    alt={properties.imageAlt}
                                    className="h-full w-full object-fill object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">
                                        <a href={properties.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {properties.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{properties.district}</p>
                                </div>
                            </div>
                        </div>

                    
                    ))}
                </div>
            </div>
        </div>
    )
}
