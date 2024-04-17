import ProjectNavLinks from "./ProjectNavLinks";


function ProjectSideNav() {
    return (
        <div className="bg-teal-800 text-gray-100 flex flex-col">
            <nav className="p-9">
                <ProjectNavLinks />
            </nav>
        </div>
    );
}

export default ProjectSideNav;