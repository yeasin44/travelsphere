import React, { useContext } from "react";
import logo from "../../assets/images/travel-logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const menuItems = (
    <>
      <li>
        <Link to="/" className="font-bold">
          Home
        </Link>
        <Link to="/blog " className="font-bold">
          Blog
        </Link>
      </li>
    </>
  );
  return (
    <div className="bg-sky-100">
      <div className="navbar  h-24 max-w-screen-lg mx-auto">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="flex normal-case">
            <img className="w-8 lg:w-16" src={logo} alt="" />
            <span className="ml-2 lg:text-2xl font-bold mt-1 lg:mt-4">
              Travelsphere
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end font-bold">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img src={user?.photoURL} alt="" />
                  ) : (
                    <div className="text-3xl ml-1 mt-1">
                      <FaUserAlt></FaUserAlt>
                    </div>
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <p className="text-black tex-2xl  text-center">
                  {user?.displayName}
                </p>
                <div className="border border-orange-500"></div>

                <li>
                  <Link to="/myreview" className="justify-between">
                    My Review
                    {/* <span className="badge">New</span> */}
                  </Link>
                </li>
                <li>
                  <Link to="/addservice">Add Service</Link>
                </li>
                <li>
                  <Link onClick={handleLogOut}>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/register" className="text-sm lg:text-lg">
                Register
              </Link>
              <Link to="/login" className="ml-6 mr-4 text-sm lg:text-lg">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
