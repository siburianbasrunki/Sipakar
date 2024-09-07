import { useState } from "react";
import axios from "axios";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (name, email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/register",
        { name, email, password }
      );
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response ? err.response.data.message : err.message);
      throw err;
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          email,
          password,
        }
      );

      setLoading(false);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      return response.data;
    } catch (err) {
      setLoading(false);
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError(err.message);
      }
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem("token");
  };

  const getUserRole = () => {
    const role = localStorage.getItem("role");
    return role || null;
  };
  console.log("Role:", getUserRole());

  return {
    register,
    login,
    logout,
    loading,
    error,
    isAuthenticated,
    getUserRole,
  };
};
