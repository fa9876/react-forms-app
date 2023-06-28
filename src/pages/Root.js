import { Link, NavLink, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div>
        <ul className="bg-slate-800 flex p-4 gap-x-8 text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500 font-bold" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500 font-bold" : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500 font-bold" : ""}`
              }
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500 font-bold" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
