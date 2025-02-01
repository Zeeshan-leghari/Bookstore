import React from "react";
import logo from "../assets/bannerlogo.png"
const Banner = () => {
  return (
    <div className="h-screen grid lg:grid-cols-2 grid-cols-1 mx-10 gap-6 items-center">
      <div className="flex flex-col space-y-6 lg:order-1 order-2">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
          Hello, welcome here to learn something{" "}
          <span className="text-pink-500">new everyday!!!</span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          consequatur facere odit animi illo similique vel inventore eos vitae
          laudantium recusandae totam, iusto enim quia nemo officia delectus
          repudiandae rem.
        </p>
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Type here"
            className="pr-10 pl-3 py-3 rounded-lg bg-transparent border border-gray-300 focus:border-gray-500 focus:outline-none text-gray-900 dark:text-white"
          />
          <button className="btn btn-secondary px-6 py-2 rounded-lg transition duration-300 hover:bg-pink-600 hover:text-white">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex justify-center lg:order-2 order-1">
        <img
          src={logo}
          alt="Books and Tea"
          className="w-[550px] h-auto rounded-lg shadow-sm transition-transform duration-300 transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Banner;
