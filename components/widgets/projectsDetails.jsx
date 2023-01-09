import React from 'react';

function ProjectsDetails(props) {
    const projects = [


        {
          id: 1,
          title: 'Boost your conversion rate',
          href: '#',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          category: { name: 'Article', href: '#' },
          imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          preview:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
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
          title: 'How to use search engine optimization to drive sales',
          href: '#',
          date: 'Mar 10, 2020',
          datetime: '2020-03-10',
          category: { name: 'Video', href: '#' },
          imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          preview:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
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
            title: 'How to use search engine optimization to drive sales',
            href: '#',
            date: 'Mar 10, 2020',
            datetime: '2020-03-10',
            category: { name: 'Video', href: '#' },
            imageUrl:
              'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            preview:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
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
            <div className="relative bg-gray-50 py-16 sm:py-4 lg:py-8">
                <div className="relative">
                    <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                        
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</p>
                        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                            Projects preview
                        </p>
                    </div>
                    <div className="mx-auto mt-12 grid max-w-md gap-8 px-6 sm:max-w-lg lg:max-w-7xl lg:grid-cols-3 lg:px-8">
                        {projects.slice(0,3).map((project) => (
                            <div key={project.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div className="flex-shrink-0">
                                    <img className="h-48 w-full object-cover" src={project.imageUrl} alt="" />
                                </div>
                                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-cyan-600">
                                            <a href={project.category.href} className="hover:underline">
                                                {project.category.name}
                                            </a>
                                        </p>
                                        <a href={project.href} className="mt-2 block">
                                            <p className="text-xl font-semibold text-gray-900">{project.title}</p>
                                            <p className="mt-3 text-base text-gray-500">{project.preview}</p>
                                        </a>
                                    </div>
                                    {/* <div className="mt-6 flex items-center">
                                        <div className="flex-shrink-0">
                                            <a href={project.author.href}>
                                                <img className="h-10 w-10 rounded-full" src={project.author.imageUrl} alt={project.author.name} />
                                            </a>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">
                                                <a href={project.author.href} className="hover:underline">
                                                    {project.author.name}
                                                </a>
                                            </p>
                                            <div className="flex space-x-1 text-sm text-gray-500">
                                                <time dateTime={project.datetime}>{project.date}</time>
                                                <span aria-hidden="true">&middot;</span>
                                                <span>{project.readingLength} read</span>
                                            </div>
                                        </div>
                                    </div> */}
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