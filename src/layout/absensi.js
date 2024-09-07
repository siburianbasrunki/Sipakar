import React, { useState } from "react";
import { useAttendance } from "../hooks/useAttendance";
import HomeImg from "../images/home.webp";
import { Navbar } from "../components/navbar";

export const Absensi = () => {
  const [photo, setPhoto] = useState(null);
  const { submitAttendance, loading, error } = useAttendance();

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!photo) {
      alert("Please upload a photo!");
      return;
    }

    try {
      const response = await submitAttendance(photo);
      alert(response);
    } catch (err) {
      console.error(err);
    }
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
          <h1 className="text-2xl font-bold text-center mb-6">
            Form Absensi Masuk
          </h1>

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
                value={new Date().toLocaleString()}
                readOnly
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="photo_in"
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
                    src={URL.createObjectURL(photo)}
                    alt="Preview"
                    className="w-32 h-32 object-cover mt-2"
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};
