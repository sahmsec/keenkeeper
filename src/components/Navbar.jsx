import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart } from "lucide-react";

const Navbar = () => {
    const linkClass = ({ isActive }) =>
        isActive
            ? "flex items-center gap-2 px-4 py-2 rounded-md bg-[#244D3F] text-white font-medium"
            : "flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-black";

    return (
        <div className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
            <h1 className="text-xl font-bold">
                Keen<span className="text-[#244D3F]">Keeper</span>
            </h1>

            <div className="flex gap-6">
                <NavLink to="/" className={linkClass}>
                    <Home size={18} />
                    Home
                </NavLink>

                <NavLink to="/timeline" className={linkClass}>
                    <Clock size={18} />
                    Timeline
                </NavLink>

                <NavLink to="/stats" className={linkClass}>
                    <BarChart size={18} />
                    Stats
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;