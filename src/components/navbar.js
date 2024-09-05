import React from "react";
import Icon from "../images/icon.svg";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar bg-blue-100 shadow-xl fixed z-10">
      <div className="flex-1">
        <img src={Icon} alt="Logo" className="h-10" width={100} height={70} />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:bg-blue-300 rounded-md">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:bg-blue-300 rounded-md">
            <Link to={"/absensi"}>Absen</Link>
          </li>
          <li className="hover:bg-blue-300 rounded-md">
            <Link to={"/admin"}>Admin</Link>
          </li>
          <li>
            <details>
              <summary className="hover:bg-blue-200 rounded-t-none p-2">
                Profile
              </summary>
              <ul className="bg-blue-100 rounded-t-none p-2">
                <li className="hover:bg-blue-300 rounded-md">
                  <Link to={"/login"}>Login</Link>
                </li>
                <li className="hover:bg-blue-300 rounded-md">
                  <Link to={"/register"}>Register</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
