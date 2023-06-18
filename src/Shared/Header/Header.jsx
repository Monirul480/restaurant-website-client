import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [ph, setPh] = useState("");

  useEffect(() => {
    if (user !== null) {
      user.providerData.forEach((profile) => {
        setName(profile.displayName);
        setPh(profile.photoURL);
      });
    }
  }, [user]);

  const signOut = () => {
    logOut()
      .then((result) => {
        console.log("logout user");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="relative">
      <div className="navbar z-50 bg-base-100 fixed top-0 left-0 right-0">
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
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost  normal-case text-xl lg:text-3xl">
            Simply Recipy
          </a>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "bg-green-500 font-bold" : "bg-white"
                  }
                >
                  Home
                </NavLink>
              </li>
             
              <li>
                <NavLink
                  to={"/register"}
                  className={({ isActive }) =>
                    isActive ? "bg-green-500 font-bold" : "bg-white"
                  }
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "bg-green-500 font-bold" : "bg-white"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          {user ? (
            <button onClick={signOut} className="btnnn mr-4">
              Log Out
            </button>
          ) : (
            <button className="btnnn mr-2">
              <NavLink to="/login">Login</NavLink>
            </button>
            
          )}

          {user ? (
            <div className="group relative lg:mr-6  flex justify-center">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-15 rounded-full group relative flex justify-center">
                  <img src={ph ? ph : "../../../public/profile.png"}></img>
                </div>
              </label>
              {name ? (
                <span className="absolute top-12 scale-0 rounded flex flex-row w-28 mr-10 bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                  ✨ {name ? name : ""}
                </span>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
