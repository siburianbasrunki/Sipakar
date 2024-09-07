import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Icon from "../images/icon.svg";

export const Navbar = () => {
  const { isAuthenticated, getUserRole, logout } = useAuth();
  const role = getUserRole();

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <div className="navbar bg-blue-100 shadow-xl fixed z-10">
      <div className="flex-1 flex items-center">
        <img src={Icon} alt="Logo" className="h-10" width={100} height={70} />
        {isAuthenticated() && (
          <span className="ml-4 text-sm text-blue-800">
            Role: {role === "admin" ? "Admin" : "Pengguna Biasa"}
          </span>
        )}
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:bg-blue-300 rounded-md">
            <Link to={"/"}>Home</Link>
          </li>
          {isAuthenticated() && role === "user" && (
            <li className="hover:bg-blue-300 rounded-md">
              <Link to={"/absensi"}>Absen</Link>
            </li>
          )}
          {isAuthenticated() && role === "admin" && (
            <li className="hover:bg-blue-300 rounded-md">
              <Link to={"/admin"}>Admin</Link>
            </li>
          )}
          <li>
            <details>
              <summary className="hover:bg-blue-200 rounded-t-none p-2">
                Profile
              </summary>
              <ul className="bg-blue-100 rounded-t-none p-2">
                {isAuthenticated() ? (
                  <li className="hover:bg-blue-300 rounded-md">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2"
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <>
                    <li className="hover:bg-blue-300 rounded-md">
                      <Link to={"/login"}>Login</Link>
                    </li>
                    <li className="hover:bg-blue-300 rounded-md">
                      <Link to={"/register"}>Register</Link>
                    </li>
                  </>
                )}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
