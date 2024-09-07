import React, { useEffect } from "react";
import { useAttendance } from "../../hooks/useAttendance";

const Absensi = () => {
  const { fetchAttendance, attendance, loading, error } = useAttendance();

  useEffect(() => {
    fetchAttendance();
  }, [fetchAttendance]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-blue-100 p-6 h-screen">
      <h1 className="text-3xl font-bold">Management Absensi</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Tanggal</th>
              <th>Waktu Absen</th>
              <th>Foto Absen</th>
            </tr>
          </thead>
          <tbody>
            {attendance.length > 0 ? (
              attendance.map((record) => (
                <tr key={record.id}>
                  <td>{record.name}</td>
                  <td>{record.email}</td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {new Date(record.date).toLocaleDateString()}
                    </span>
                  </td>
                  <td>{record.time_in}</td>
                  <td>
                    <img
                      src={record.photo_in}
                      alt="Attendance"
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No attendance records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Absensi;
