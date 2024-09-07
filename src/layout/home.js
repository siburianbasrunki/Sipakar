import { Link } from "react-router-dom";
import HomeImg from "../images/home.webp";
import { Navbar } from "../components/navbar";
import { useAuth } from "../hooks/useAuth";
export const Home = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(" + HomeImg + ")",
        }}
      >
        <div className="hero-content text-neutral-content text-center z-50">
          <div className="max-w-md">
            <p className="mb-5 text-2xl font-bold">
              Selamat Datang di Platform SIPAKAR
            </p>
            <h1 className="mb-5 text-5xl font-bold">Sistem Pantau Karyawan</h1>
            <p className="mb-5">
              SIPAKAR hadir untuk memberikan solusi terbaik dalam memantau
              kehadiran karyawan Anda dengan efisien dan akurat.
            </p>
            {isAuthenticated() ? (
              <Link to="/absen">
                <button className="btn btn-primary">Absen</button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
