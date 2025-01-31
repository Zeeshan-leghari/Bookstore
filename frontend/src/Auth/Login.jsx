import React from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="login-modal" className="modal backdrop:backdrop-blur-sm">
        <div className="modal-box p-0 relative max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100">
          <div className="px-10 py-12">
            <form method="dialog" >
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                onClick={() => document.getElementById("login-modal").close()}
              >
                ✕
              </button>
            </form>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-500">Please sign in to continue</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}> 
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                    placeholder="name@company.com"
                    {...register("email", {required: true})}
                  />
                  {errors.email && <p className="text-red-500 text-xs">Email is required</p>}

                  <svg
                    className="w-5 h-5 absolute right-3 top-3.5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                    placeholder="••••••••"
                    {...register("password", {required: true})}

                  />
                  {errors.password && <p className="text-red-500 text-xs ">Password is required</p>}

                  <svg
                    className="w-5 h-5 absolute right-3 top-3.5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-500 rounded focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-gray-600 text-sm">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign in
              </button>

              <p className="mt-8 text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Link
                  to="register"
                  className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Register here
                </Link>
              </p>
            </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
