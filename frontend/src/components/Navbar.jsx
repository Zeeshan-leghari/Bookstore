import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import LogOut from "./LogOut";

const Navbar = () => {
  const [authuser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark:bg-gray-800");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark:bg-gray-800");
      localStorage.setItem("theme", "light");
    }
    
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="w-full border-b-2 border-slate-500  shadow-lg ">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 ">
          <div className="flex items-center  justify-between space-x-4">
            <Link to="/" className="lg:ml-1 text-3xl font-semibold text-gray-900 dark:text-white">
              BookStore
            </Link>
            <div className="lg:hidden">
              <button
                className="text-gray-900 dark:text-white"
                aria-label="Toggle Menu"
                onClick={() => document.getElementById("navbar-menu").classList.toggle("hidden")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8 uppercase font-serif ">
            <Link to="/" className="text-lg text-gray-700 dark:text-white hover:text-blue-500">Home</Link>
            <Link to="/Paidbook" className="text-lg text-gray-700 dark:text-white hover:text-blue-500">Paidbook</Link>
            <Link to="/contact" className="text-lg text-gray-700 dark:text-white hover:text-blue-500">Contact</Link>
            <Link to="/about" className="text-lg text-gray-700 dark:text-white hover:text-blue-500">About</Link>

          </div>
          <div className="flex items-center space-x-4">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <svg
                className="swap-off h-7 w-7 fill-current text-gray-900 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-on h-7 w-7 fill-current text-gray-900 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            {authuser ? (
              <LogOut />
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="navbar-menu" className="lg:hidden hidden mt-4 bg-gray-100 dark:bg-gray-800 rounded-md">
        <ul className="space-y-4 p-4">
          <li>
            <Link to="/" className="block text-gray-900 dark:text-white">Home</Link>
          </li>
          <li>
            <Link to="/Paidbook" className="block text-gray-900 dark:text-white">PaidBook</Link>
          </li>
          <li>
            <Link to="/contact" className="block text-gray-900 dark:text-white">Contact</Link>
          </li>
          <li>
            <Link to="/about" className="block text-gray-900 dark:text-white">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
