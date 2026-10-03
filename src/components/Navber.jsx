import { NavLink } from "react-router-dom";

const Navber = () => {
  const base =
    "px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors sm:px-3 sm:py-2 sm:text-sm";
  const active = ({ isActive }) =>
    `${base} ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-3 py-2 sm:flex-row sm:gap-3 sm:px-4 sm:py-3">
        {/* Logo - left */}
        <NavLink to="/" className="text-xl font-bold text-blue-600 sm:text-2xl">
          MyApp
        </NavLink>

        {/* Links - right */}
        <div className="flex flex-wrap items-center justify-center gap-1 sm:justify-end">
          <NavLink to="/" end className={active}>Home</NavLink>
          <NavLink to="/about" className={active}>About</NavLink>
          <NavLink to="/contact" className={active}>Contact</NavLink>
          <NavLink to="/register" className={active}>Register</NavLink>
          <NavLink to="/login" className={active}>Login</NavLink>
          <NavLink to="/profile" className={active}>Profile</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navber;