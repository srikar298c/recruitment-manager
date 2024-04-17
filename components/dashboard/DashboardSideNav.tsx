import NavLinks from "./DashboardNavlinks";

function DashboardSideNav() {
    return (
        <div className="bg-teal-800 text-gray-100 flex flex-col">
            <nav className="p-9">
                <NavLinks />
            </nav>
        </div>
    );
}

export default DashboardSideNav;