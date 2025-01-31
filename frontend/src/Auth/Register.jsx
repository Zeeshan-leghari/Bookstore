import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    document.getElementById("login-modal")?.showModal();
  }, []);

  return (
    <dialog id="login-modal" className="modal backdrop:backdrop-blur-sm">
      <div className="modal-box p-0 relative max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100">
        <div className="px-10 py-12">
          <form method="dialog">
            <Link
              to="/"
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => document.getElementById("login-modal").close()}
            >
              ✕
            </Link>
          </form>

          <div className="text-center ">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Create Account
            </h2>
            <p className="text-gray-500">
              Please fill out the form to create your account
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                  placeholder="John Doe"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">Name is required</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                  placeholder="name@company.com"
                  {...register("email", { required: true })}
                />
                                  {errors.email && <p className="text-red-500 text-xs">Email is required</p>}

              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                  placeholder="••••••••"
                  {...register("password", { required: true })}
                />
                                  {errors.password && <p className="text-red-500 text-xs ">Password is required</p>}

              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-500 rounded focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-gray-600 text-sm">
                    I agree to the terms
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Register
              </button>

              <p className="mt-8 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Register;
