import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./layout/home";
import { Login } from "./layout/Login";
import { Register } from "./layout/register";
import AdminLayout from "./pages/AdminLayout";
import Dashboard from "./layout/Admin/dashboard";
import { Absensi } from "./layout/absensi";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/absensi" element={<Absensi />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="absensi" element={<Absensi />} />
      </Route>
    </Routes>
  );
}

export default App;
