import React from 'react'

function ProjectList() {
    const numberOfProjects = 5;
    const projects = Array.from({ length: numberOfProjects }, (_, index) => `Project ${index + 1}`);
    return (
        <div className="flex flex-col space-y-2.5 bg">
            <div className="flex items-center justify-between px-3 sm:px-0 ">
                <p className=''>Projects</p>
            </div>
            <div className="">
                <ul>
                    {projects.map((projectName, index) => (
                        <li key={index}>
                            <a href={`/projects/${index + 1}`}>{projectName}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectList