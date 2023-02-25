import Link from 'next/link';
import React from 'react';

function ProjectsDetails(props) {
    const projects = [


        {
            id: 1,
            title: 'Arranged delivery of critical infrastructure for clients from USA to Malawi, Zambia during the pandemic.',
            href: '#',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { name: 'Article', href: '#' },
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            company:
                'Embassy of Malawi',
            author: {
                name: 'Roel Aufderehar',
                imageUrl:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                href: '#',
            },
            readingLength: '6 min',
        },
        {
            id: 2,
            title: 'Negotiated and implemented long term and secure storage for equipment',
            href: '#',
            date: 'Mar 10, 2020',
            datetime: '2020-03-10',
            category: { name: 'Video', href: '#' },
            imageUrl:
                'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            company:
                'Dixie Cullen Interests',
            author: {
                name: 'Brenna Goyette',
                imageUrl:
                    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                href: '#',
            },
            readingLength: '4 min',
        },
        {
            id: 2,
            title: 'Guided foreign organization shopping for technology in USA, set up secure communications, meetings, and review of contracts.',
            href: '#',
            date: 'Mar 10, 2020',
            datetime: '2020-03-10',
            category: { name: 'Video', href: '#' },
            imageUrl:
                'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            company:
                'Embassy of Malawi',
            author: {
                name: 'Brenna Goyette',
                imageUrl:
                    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                href: '#',
            },
            readingLength: '4 min',
        },
        {
            id: 2,
            title: 'Replacing the VRF (Variable Refrigerant Flow) Systems for a four-story building in Washington, DC.',
            href: '#',
            date: 'Mar 10, 2020',
            datetime: '2020-03-10',
            category: { name: 'Video', href: '#' },
            imageUrl:
                'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            company:
                'Embassy of Malawi',
            author: {
                name: 'Brenna Goyette',
                imageUrl:
                    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                href: '#',
            },
            readingLength: '4 min',
        },
    ]
    return (
        <div>

            {/* Blog section */}
            <div className="relative bg-gray-50 py-8 sm:mt-2">
                <div className="relative">
                    <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">

                        <div className="mb-8">
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</p>

                        </div>
                        <div className="">
                            <Link href="/projects" className="mx-auto mt-5 p-4 bg-brown rounded max-w-prose text-xl text-gray-100">
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div className="mx-auto mt-4 grid max-w-md gap-8 px-6 sm:max-w-lg lg:max-w-7xl lg:grid-cols-3 lg:px-8 sm:mt-4">
                        {projects.slice(0, 3).map((project) => (
                            <div key={project.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div className="flex-shrink-0">
                                    <img className="h-48 w-full object-cover" src={project.imageUrl} alt="" />
                                </div>
                                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-cyan-600">
                                            <a href={project.category.href} className="hover:underline">
                                                {project.company}
                                            </a>
                                        </p>
                                        <a href={project.href} className="mt-2 block">
                                            <p className="text-xl font-semibold text-gray-600">{project.title}</p>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsDetails;