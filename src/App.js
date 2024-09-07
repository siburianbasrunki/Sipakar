import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./layout/home";
import { Login } from "./layout/Login";
import { Register } from "./layout/register";
import AdminLayout from "./pages/AdminLayout";
import Dashboard from "./layout/Admin/dashboard";
import { Absensi } from "./layout/absensi";
import AbsensiAdmin from "./layout/Admin/absensi";
import Employee from "./layout/Admin/employee";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/absensi" element={<Absensi />} />

      <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />

      <Route
        path="/admin/dashboard"
        element={
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/absensi"
        element={
          <AdminLayout>
            <AbsensiAdmin />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/employee"
        element={
          <AdminLayout>
            <Employee />
          </AdminLayout>
        }
      />
    </Routes>
  );
}

export default App;
