import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart } from "lucide-react";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-md bg-[#244D3F] text-white text-sm md:text-base font-medium"
      : "flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 text-gray-600 hover:text-black text-sm md:text-base";

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-lg md:text-xl font-bold">
          Keen<span className="text-[#244D3F]">Keeper</span>
        </h1>

        {/* Nav Links */}
        <div className="flex gap-2 md:gap-6">
          <NavLink to="/" className={linkClass}>
            <Home size={18} />
            <span className="hidden sm:inline">Home</span>
          </NavLink>

          <NavLink to="/timeline" className={linkClass}>
            <Clock size={18} />
            <span className="hidden sm:inline">Timeline</span>
          </NavLink>

          <NavLink to="/stats" className={linkClass}>
            <BarChart size={18} />
            <span className="hidden sm:inline">Stats</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;