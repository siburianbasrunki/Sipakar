import React, { useState } from "react";
import HomeImg from "../images/home.webp";
import { Navbar } from "../components/navbar";

export const Absensi = () => {
  const [photo, setPhoto] = useState(null);
  const [date] = useState(new Date().toLocaleString());
  const [division, setDivision] = useState("");

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleDivisionChange = (e) => {
    setDivision(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!photo) {
      alert("Please upload a photo!");
      return;
    }
    if (!division) {
      alert("Please select a division!");
      return;
    }
    console.log("Photo:", photo);
    console.log("Date:", date);
    console.log("Division:", division);
    alert("Absensi berhasil disubmit!");
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url(" + HomeImg + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full max-w-md p-6 bg-blue-100 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Form Absensi</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="date"
              >
                Tanggal & Waktu
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={date}
                readOnly
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="division"
              >
                Divisi Pekerjaan
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                id="division"
                value={division}
                onChange={handleDivisionChange}
                required
              >
                <option value="" disabled>
                  Pilih Divisi
                </option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="photo"
              >
                Upload Foto
              </label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-info w-full max-w-xs"
                accept="image/*"
                onChange={handlePhotoChange}
                required
              />
              {photo && (
                <div className="mt-4">
                  <p className="text-sm font-bold">Preview Foto:</p>
                  <img
                    src={photo}
                    alt="Preview"
                    className="w-32 h-32 object-cover mt-2"
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit Absen
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
