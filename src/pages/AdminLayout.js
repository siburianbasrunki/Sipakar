import React from "react";
import { Sidebar } from "../components/sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex justify-between gap-5">
      <Sidebar />
      <div className="flex-1 p-60">{children}</div>
    </div>
  );
};

export default AdminLayout;
