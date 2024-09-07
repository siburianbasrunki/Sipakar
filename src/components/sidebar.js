import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdDocumentScanner,
  MdPeople,
  MdLogout,
} from "react-icons/md";
import Icon from "../images/icon.svg";

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="w-64 h-screen bg-blue-500 text-white flex flex-col justify-between">
      <div>
        <Link to={"/admin"}>
          <div className="p-6 text-center text-2xl font-bold flex flex-col items-center">
            <img
              src={Icon}
              alt="Logo"
              className="h-10"
              width={100}
              height={70}
            />
            <h2 className="uppercase">Sipakar</h2>
            <p className="text-sm">Sistem Pantau Karyawan</p>
          </div>
        </Link>
        <ul>
          <Link to="/admin/dashboard" className="block py-2 px-4">
            <li
              className={`flex hover:bg-blue-700 items-center flex-row p-2 gap-2 rounded-md ${
                isActive("/admin/dashboard") ? "bg-blue-700" : ""
              }`}
            >
              <MdDashboard />
              Dashboard
            </li>
          </Link>
          <Link to="/admin/absensi" className="block py-2 px-4 ">
            <li
              className={`flex items-center flex-row hover:bg-blue-700 p-2 gap-2 rounded-md ${
                isActive("/admin/absensi") ? "bg-blue-700" : ""
              }`}
            >
              <MdDocumentScanner />
              Absensi
            </li>
          </Link>
          <Link to="/admin/employee" className="block py-2 px-4 ">
            <li
              className={`flex items-center flex-row hover:bg-blue-700 p-2 gap-2 rounded-md ${
                isActive("/admin/karyawan") ? "bg-blue-700" : ""
              }`}
            >
              <MdPeople />
              Karyawan
            </li>
          </Link>
        </ul>
      </div>
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="flex items-center w-full text-left hover:bg-blue-700 p-2 gap-2 rounded-md"
        >
          <MdLogout />
          Logout
        </button>
      </div>
    </div>
  );
};
