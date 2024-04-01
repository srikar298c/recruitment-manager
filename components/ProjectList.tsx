import React from 'react'

function ProjectList() {
    const numberOfProjects = 10;
    const projects = Array.from({ length: numberOfProjects }, (_, index) => `Project ${index + 1}`);
    return (
        <div className="flex flex-col space-y-2.5 text-teal-800">
            <div className="flex items-center justify-between px-3 sm:px-0 ">
                <p className='text-3xl'>Projects</p>
            </div>
            <div className="">
                <ul style={{ width: '100%' }}>
                    {projects.map((projectName, index) => (
                        <li key={index} style={{ width: '100%' }}>
                            <a href={`/projects/${index + 1}`} style={{ display: 'block', width: '100%', padding:'15px', }}>
                                {projectName}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default ProjectList