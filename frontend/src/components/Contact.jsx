import React from "react";

const Contact = () => {
  return (
    <div className="grid sm:grid-cols-2 items-start gap-16 p-8 mx-auto max-w-5xl bg-gradient-to-br rounded-xl shadow-2xl transform hover:shadow-3xl transition-shadow duration-300">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            Have a project in mind or just want to say hello? We're here to
            listen and create something amazing together.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <span className="w-8 h-1 bg-blue-600 mr-4 rounded-full"></span>
              Contact Info
            </h2>
            <div className="flex items-center group">
              <div className="bg-white h-14 w-14 rounded-xl flex items-center justify-center shadow-md group-hover:bg-blue-600 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <a
                href="mailto:zeeshangood3@gmail.com"
                className="ml-4 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                zeeshangood3@gmail.com
              </a>
            </div>
          </div>

  <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <span className="w-8 h-1 bg-blue-600 mr-4 rounded-full"></span>
              Follow Us
            </h2>
            <div className="flex space-x-4">
              {[
                {
                  icon: (
                    <path d="M18.89 7.012h-2.913v2.914c0 .23-.186.417-.416.417h-1.81a.417.417 0 01-.417-.417V7.012h-2.91a.417.417 0 01-.418-.417V5.22c0-.23.187-.417.417-.417h2.91V1.89a.417.417 0 01.417-.417h1.81c.23 0 .416.187.416.417v2.914h2.913c.23 0 .417.186.417.416v1.376c0 .23-.187.416-.417.416zm-5.14 4.998h1.81c.23 0 .416.186.416.416v7.303c0 .23-.187.416-.416.416h-1.81a.417.417 0 01-.417-.416v-7.303c0-.23.187-.416.417-.416zm-4.498 0h1.81c.23 0 .417.186.417.416v7.303c0 .23-.187.416-.417.416h-1.81a.417.417 0 01-.416-.416v-7.303c0-.23.187-.416.416-.416zm0-9.998h1.81c.23 0 .417.186.417.416v4.582a.417.417 0 01-.417.417h-1.81a.417.417 0 01-.416-.417V2.428c0-.23.187-.416.416-.416zm-4.498 5.83h1.81c.23 0 .417.186.417.416v4.582a.417.417 0 01-.417.416h-1.81a.417.417 0 01-.416-.416V8.668c0-.23.187-.416.416-.416z" />
                  ),
                },
                {
                  icon: (
                    <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zm-2.05 6.54c-.81 0-1.47-.67-1.47-1.47 0-.81.66-1.47 1.47-1.47s1.47.66 1.47 1.47c0 .8-.66 1.47-1.47 1.47zM12 16.35c-1.47 0-2.68-1.2-2.68-2.68s1.2-2.68 2.68-2.68 2.68 1.2 2.68 2.68-1.21 2.68-2.68 2.68zm3.93-6.87c-.47 0-.85-.38-.85-.85s.38-.85.85-.85.85.38.85.85-.38.85-.85.85z" />
                  ),
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-white h-14 w-14 rounded-xl flex items-center justify-center shadow-md hover:bg-blue-600 transition-colors duration-300 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600 group-hover:text-white transition-colors duration-300"
                    viewBox="0 0 24 24"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>        </div>
      </div>

      <form className="space-y-6 p-8  rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-3 bg-zinc-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Your Name"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Your Email"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Subject"
            />
          </div>
          <div className="relative">
            <textarea
              rows="5"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Your Message"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;