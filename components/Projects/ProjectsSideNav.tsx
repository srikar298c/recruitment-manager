import ProjectNavLinks from "./ProjectsNavLinks";


function ProjectsSideNav() {
    return (
        <div className="bg-teal-800 text-gray-100 flex flex-col">
            <nav className="p-9">
                <ProjectNavLinks />
            </nav>
        </div>
    );
}

export default ProjectsSideNav;