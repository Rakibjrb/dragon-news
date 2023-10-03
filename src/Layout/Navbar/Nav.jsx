import { Link, NavLink } from "react-router-dom";
import User from "../../assets/imgs/user.png";
import "./nav.css";

const links = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/career">Career</NavLink>
    </li>
  </>
);

const Nav = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="space-y-5 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-5 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <img className="w-10 h-10 mr-3" src={User} alt="user image" />
        <Link
          to="/login-form"
          className="btn rounded-none  bg-[#403F3F] text-white"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
