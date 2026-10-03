import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive
      ? "bg-blue-600 text-white"
      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
  }`;

const Navber = () => {
  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-2 bg-white px-4 py-3 shadow-md">
      <NavLink to="/" end className={linkClass}>Home</NavLink>
      <NavLink to="/about" className={linkClass}>About</NavLink>
      <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      <NavLink to="/register" className={linkClass}>Register</NavLink>
      <NavLink to="/login" className={linkClass}>Login</NavLink>
      <NavLink to="/profile" className={linkClass}>Profile</NavLink>
    </nav>
  );
};

export default Navber;