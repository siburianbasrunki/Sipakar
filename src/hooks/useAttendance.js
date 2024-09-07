import { useCallback, useState } from "react";
import axios from "axios";

export const useAttendance = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [attendance, setAttendance] = useState([]);

  const submitAttendance = async (photo) => {
    const formData = new FormData();
    formData.append("photo_in", photo);

    const token = localStorage.getItem("token");
    console.log(token);

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/attendance",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchAttendance = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/api/attendance");
      setAttendance(response.data);
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { submitAttendance, fetchAttendance, attendance, loading, error };
};
