import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const auth = getAuth(app);

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  console.log(user);

  return (

    <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-primary-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* ============================choto screen=========================== */}
           <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-box w-52"
          >
            <li>
              <a href="/"> Home</a>
            </li>

            {user && admin === false && (
              <li tabindex="0">
                {" "}
                <a className="justify-between">
                  Student
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <li>
                    <a href="/profile">My Profile</a>
                  </li>
                </ul>
              </li>
            )}

            {user && admin && (
              <li tabindex="0">
                {" "}
                <a className="justify-between">
                  Students
                  <svg
                    className="fill-current" 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
                  <li>
                    <a href="allProfile">All Profiles</a>
                  </li>
                </ul>
              </li>
            )}
            {user ? (
              <li>
                <a onClick={logout}>Logout</a>
              </li>
            ) : (
              <li>
                <a href="/login">Login</a>
              </li>
            )}
          </ul>
        </div>


        {/* ======================= boro screen ======================== */}

        <a className="btn btn-ghost normal-case text-xl">Your Attendance</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="/"> Home</a>
          </li>

          {user && admin === false && (
            <li tabindex="0">
              {" "}
              <a className="justify-between">
                Student
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a href="/profile">My Profile</a>
                </li>
              </ul>
            </li>
          )}

          {user && admin && (
            <li tabindex="0">
              {" "}
              <a className="justify-between">
                Students
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a href="allProfile">All Profiles</a>
                </li>
              </ul>
            </li>
          )}
          {user ? (
            <li>
              <a onClick={logout}>Logout</a>
            </li>
          ) : (
            <li>
              <a href="/login">Login</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
