import NavLinks from "./Navlinks";

function SideNav() {
    return (
        <div className="bg-teal-800 text-gray-100 flex flex-col">
            <nav className="p-9">
                <NavLinks />
            </nav>
        </div>
    );
}

export default SideNav;