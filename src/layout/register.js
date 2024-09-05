import { Navbar } from "../components/navbar";
import HomeImg from "../images/home.webp";

export const Register = () => {
  return (
    <>
      <Navbar />
      <div
        className="flex items-center justify-center min-h-screen"
        style={{
          backgroundImage: "url(" + HomeImg + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full max-w-sm p-6 bg-blue-100 rounded shadow-md">
          <h1 className="mb-6 text-2xl font-bold text-center text-blue-600">
            Register
          </h1>
          <form>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-blue-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border border-blue-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-blue-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border border-blue-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-bold text-blue-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-blue-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                punya akun?{" "}
                <a href="/login" className="text-blue-500 hover:text-blue-700">
                  Login now
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
