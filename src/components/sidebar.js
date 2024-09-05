import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-500 text-white">
      <Link to={"/admin"}>
        <div className="p-6 text-center text-2xl font-bold">
          <h2 className="uppercase">Sipakar</h2>
          <p className="text-sm">Sistem Pantau Karyawan</p>
        </div>
      </Link>
      <ul className="mt-6">
        <li>
          <Link
            to="/admin/dashboard"
            className="block py-2 px-4 hover:bg-blue-700"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/admin/absensi"
            className="block py-2 px-4 hover:bg-blue-700"
          >
            Absensi
          </Link>
        </li>
      </ul>
    </div>
  );
};
